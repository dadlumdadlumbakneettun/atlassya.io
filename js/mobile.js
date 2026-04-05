// ── MOBİL DOKUNMATIK KONTROLLER ──────────────────────────────────────────
// Masaüstünde hiçbir şey yapmaz. Mobil/tablet için görünmez joystick sistemi.

const isMobile = /Android|iPhone|iPad|iPod|Touch/i.test(navigator.userAgent) || ('ontouchstart' in window);

if (isMobile) {
    // PointerLock mobilde çalışmaz — engelle ve bypass et
    window._mobileActive = true;

    // Kamera açısı (PointerLock yerine elle tutulur)
    let _camYaw   = 0;  // sol/sağ
    let _camPitch = 0;  // yukarı/aşağı

    // Sol joystick (yürüme)
    let _joyActive   = false;
    let _joyId       = null;
    let _joyStartX   = 0;
    let _joyStartY   = 0;
    let _joyDX       = 0;
    let _joyDY       = 0;

    // Sağ joystick (kamera)
    let _lookActive  = false;
    let _lookId      = null;
    let _lookLastX   = 0;
    let _lookLastY   = 0;

    // Etkileşim butonu dokunuşu
    let _interactTap = false;

    const DEAD_ZONE   = 10;   // px — küçük titremeleri yoksay
    const JOY_MAX     = 60;   // px — maksimum joystick yarıçapı
    const LOOK_SENS   = 0.003; // kamera hassasiyeti

    // ── Blocker'ı mobilde hemen kapat ──────────────────────────────────────
    window.addEventListener('load', () => {
        setTimeout(() => {
            const blocker = document.getElementById('blocker');
            if (blocker) {
                blocker.addEventListener('touchstart', (e) => {
                    e.preventDefault();
                    initAudio();
                    blocker.style.display = 'none';
                    _startMobileGame();
                }, { passive: false, once: true });
            }
        }, 100);
    });

    function _startMobileGame() {
        // PointerLock'u sahte olarak işaretle — oyun döngüsü isLocked kontrol eder
        // controls.isLocked'ı her zaman true döndürecek şekilde override et
        Object.defineProperty(controls, 'isLocked', {
            get: () => true,
            configurable: true
        });

        // Kamerayı başlangıç yönüne ayarla
        const eu = new THREE.Euler(0, 0, 0, 'YXZ');
        eu.setFromQuaternion(camera.quaternion);
        _camYaw   = eu.y;
        _camPitch = eu.x;

        _bindTouchEvents();
    }

    function _bindTouchEvents() {
        const canvas = document.getElementById('gameCanvas');

        canvas.addEventListener('touchstart',  _onTouchStart,  { passive: false });
        canvas.addEventListener('touchmove',   _onTouchMove,   { passive: false });
        canvas.addEventListener('touchend',    _onTouchEnd,    { passive: false });
        canvas.addEventListener('touchcancel', _onTouchEnd,    { passive: false });
    }

    function _onTouchStart(e) {
        e.preventDefault();
        for (let t of e.changedTouches) {
            const halfW = window.innerWidth / 2;
            if (t.clientX < halfW) {
                // Sol yarı → yürüme joystick
                if (!_joyActive) {
                    _joyActive = true;
                    _joyId     = t.identifier;
                    _joyStartX = t.clientX;
                    _joyStartY = t.clientY;
                    _joyDX     = 0;
                    _joyDY     = 0;
                }
            } else {
                // Sağ yarı → kamera döndürme + etkileşim tıklaması
                if (!_lookActive) {
                    _lookActive = true;
                    _lookId     = t.identifier;
                    _lookLastX  = t.clientX;
                    _lookLastY  = t.clientY;
                }
            }
        }
    }

    function _onTouchMove(e) {
        e.preventDefault();
        for (let t of e.changedTouches) {
            if (_joyActive && t.identifier === _joyId) {
                let dx = t.clientX - _joyStartX;
                let dy = t.clientY - _joyStartY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist > JOY_MAX) {
                    dx = (dx / dist) * JOY_MAX;
                    dy = (dy / dist) * JOY_MAX;
                }
                _joyDX = dx;
                _joyDY = dy;
            }
            if (_lookActive && t.identifier === _lookId) {
                const mx = t.clientX - _lookLastX;
                const my = t.clientY - _lookLastY;
                _lookLastX = t.clientX;
                _lookLastY = t.clientY;

                _camYaw   -= mx * LOOK_SENS * userSens;
                _camPitch -= my * LOOK_SENS * userSens;
                _camPitch  = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, _camPitch));

                const eu = new THREE.Euler(_camPitch, _camYaw, 0, 'YXZ');
                camera.quaternion.setFromEuler(eu);

                // Çark sürükleme
                if (isDraggingWheel) {
                    if (activeWheelType === 'WHEEL_HORROR') { horrorVelocity += mx * 0.005; isHorrorSpinning = true; winningGame = null; }
                    else if (activeWheelType === 'WHEEL_CHILL') { chillVelocity += mx * 0.005; isChillSpinning = true; chillWonGame = null; }
                }
            }
        }
    }

    function _onTouchEnd(e) {
        e.preventDefault();
        for (let t of e.changedTouches) {
            if (_joyActive && t.identifier === _joyId) {
                _joyActive = false;
                _joyId     = null;
                _joyDX     = 0;
                _joyDY     = 0;
                moveForward  = false;
                moveBackward = false;
                moveLeft     = false;
                moveRight    = false;
            }
            if (_lookActive && t.identifier === _lookId) {
                // Parmak kalkarken kısa dokunuşsa → etkileşim (tap)
                const dx = t.clientX - _lookLastX;
                const dy = t.clientY - _lookLastY;
                const moved = Math.sqrt(dx * dx + dy * dy);
                if (moved < DEAD_ZONE) {
                    // Etkileşim simüle et
                    _simulateInteract();
                }
                _lookActive = false;
                _lookId     = null;
                isDraggingWheel = false;
            }
        }
    }

    // Joystick değerlerini her frame yürüme değişkenlerine yaz
    // animate() çağrılmadan önce bu çağrılır
    window._mobileUpdateMovement = function () {
        if (!_joyActive) return;
        const absX = Math.abs(_joyDX);
        const absY = Math.abs(_joyDY);
        moveForward  = _joyDY < -DEAD_ZONE;
        moveBackward = _joyDY >  DEAD_ZONE;
        moveLeft     = _joyDX < -DEAD_ZONE;
        moveRight    = _joyDX >  DEAD_ZONE;
    };

    // Etkileşim: tıklama olayını simüle et
    function _simulateInteract() {
        // Raycaster zaten animate() içinde interactTarget'ı günceller
        // Sadece onMouseDown'u çağırmak yeterli
        onMouseDown();
    }

    // ESC menüsü yerine mobilde sağ üste küçük menü butonu
    window.addEventListener('load', () => {
        setTimeout(() => {
            const menuBtn = document.createElement('div');
            menuBtn.id = 'mobileMenuBtn';
            menuBtn.innerHTML = '☰';
            menuBtn.style.cssText = `
                position: fixed;
                top: 16px;
                right: 16px;
                z-index: 50;
                width: 48px;
                height: 48px;
                background: rgba(0,0,0,0.5);
                border: 1px solid rgba(255,215,0,0.4);
                color: #FFD700;
                font-size: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 8px;
                cursor: pointer;
                user-select: none;
                -webkit-user-select: none;
            `;
            menuBtn.addEventListener('touchstart', (e) => {
                e.stopPropagation();
                openModal('escMenuUI');
            }, { passive: true });
            document.body.appendChild(menuBtn);

            // Etkileşim butonu — ortada alt
            const interactBtn = document.createElement('div');
            interactBtn.id = 'mobileInteractBtn';
            interactBtn.innerHTML = '⊙';
            interactBtn.style.cssText = `
                position: fixed;
                bottom: 40px;
                left: 50%;
                transform: translateX(-50%);
                z-index: 50;
                width: 64px;
                height: 64px;
                background: rgba(255,215,0,0.15);
                border: 2px solid rgba(255,215,0,0.5);
                color: #FFD700;
                font-size: 28px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                cursor: pointer;
                user-select: none;
                -webkit-user-select: none;
            `;
            interactBtn.addEventListener('touchstart', (e) => {
                e.stopPropagation();
                e.preventDefault();
                _simulateInteract();
            }, { passive: false });
            document.body.appendChild(interactBtn);
        }, 200);
    });

} else {
    // Masaüstü: hiçbir şey yapma
    window._mobileUpdateMovement = function () {};
}
