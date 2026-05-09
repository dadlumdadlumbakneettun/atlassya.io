const allGames = [
  {
    name: 'DREAD FLATS',
    type: 'korku, bulmaca',
    playtime: '2 saat',
    steamId: '3114900'
  },
  {
    name: 'CLINK',
    type: 'Korku',
    playtime: '1 saat',
    steamId: '3494130',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3494130/079f1a0c06f0186e132c815f3353543514a3cc44/header.jpg?t=1749669037'
  },
  {
    name: 'THE KIDNAP',
    type: 'gerilim, japon korku',
    playtime: '1 saat',
    steamId: '2593900'
  },
  {
    name: 'THE EXIT 8',
    type: 'anomali',
    playtime: '30 dakika',
    steamId: '2653790'
  },
  {
    name: 'SHINKANSE 0',
    type: 'zor anomali',
    playtime: '1-2 saat',
    steamId: '2793370'
  },
  {
    name: 'WE HARVEST SHADOWS',
    type: 'indie demo korku',
    playtime: '2 saat',
    steamId: '1559720'
  },
  {
    name: 'THE STAIRWAY 7',
    type: 'anomali, kedy',
    playtime: '1 saat',
    steamId: '2911820'
  },
  {
    name: 'BROKENLORE: DON\'T WATCH',
    type: 'korku',
    playtime: '1 saat',
    steamId: '2351330'
  },
  {
    name: 'Platform 8',
    type: 'anomali',
    playtime: '20 dakika',
    steamId: '2903560'
  },
  {
    name: 'The Closing Shift',
    type: 'japon korku',
    playtime: '1-2 saat',
    steamId: '1843090'
  },
  {
    name: 'PARASOCIAL',
    type: 'japon korku',
    playtime: '1-1,5 saat',
    steamId: '2314720'
  },
  {
    name: 'THE CONVENIENCE STORE',
    type: 'japon korku',
    playtime: '1 saat',
    steamId: '1228520'
  },
  {
    name: 'THE KARAOKE',
    type: 'japon korku',
    playtime: '1 saat',
    steamId: '2200190'
  },
  {
    name: 'Skull Hotel',
    type: 'anomali',
    playtime: '1 Saat',
    steamId: '3739730',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3739730/c3f9088f09dabf6f07eb3595b6687b680a1cacbf/header.jpg?t=1761749116'
  },
  {
    name: 'No, I\'m not a Human',
    type: 'gizem',
    playtime: '2,50 saat - sonsuz saat',
    steamId: '3180070'
  },
  {
    name: 'HELLMART',
    type: 'korku',
    playtime: '3 saat',
    steamId: '3762550',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3762550/8d5561f21bb46dd76d7a8b863c901d6a05e19204/header.jpg?t=1770292620'
  },
  {
    name: 'Last Report',
    type: 'korku, psikolojik',
    playtime: '1.50 - 2.50 saat',
    steamId: '3209480'
  },
  {
    name: 'We Used to Play Here',
    type: 'korku',
    playtime: '1.5 saat',
    steamId: '3998890',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3998890/13a794115c7891c71f83393c21e2ebc53df5f25b/header.jpg?t=1766131439'
  },
  {
    name: 'Toilet 8',
    type: 'anomali',
    playtime: '40 dakika',
    steamId: '4142980',
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4142980/c9b71c6acd939c39044b3c56e51b0f8ab12e93bb/header.jpg?t=1772537552'
  },
  {
    name: "Don't Play This",
    type: 'korku',
    playtime: '1 saat',
    steamId: '3319120',
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3319120/07d1ccb485d61cb593b42e8932fecf03e18f4a9c/header.jpg?t=1776353186'
  },
  {
    name: 'The Guest 2',
    type: 'korku',
    playtime: '1 saat',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4466990/6d2b90fe3e775a2dcce7254ec0315da4be3e7f86/header.jpg?t=1776927971'
  },
  {
    name: 'The Strange Lights',
    type: 'korku',
    playtime: '40 dakika',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3823950/6e090fcb7c2b15dbbdbdc2d78fff00ef053b0032/header.jpg?t=1770474068'
  },
  {
    name: 'The Last Letter',
    type: 'korku',
    playtime: '50 dakika',
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4508710/f34472f838adc1f0c5f909f98835d5c07e6bcad9/header.jpg?t=1776955886'
  },
  {
    name: 'Empty Gauge',
    type: 'korku',
    playtime: '1 saat',
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3998790/231429f45e9511324cd000a7ad5485b54d8014b4/header.jpg?t=1776617740'
  },
  {
    name: 'Dread Neighboard',
    type: 'korku, demo',
    playtime: '20 dakika',
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4111260/84a64fa6dc33458da3a3cdff74d1f140dd3f9896/header.jpg?t=1777361210'
  },
  {
    name: "DON'T OPEN",
    type: 'korku',
    playtime: '1 saat',
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4498870/ea34ad27ebbf448fddea528f9581b4f1eb008da4/header.jpg?t=1773904304'
  },
  {
    name: 'Tostchu',
    type: 'korku',
    playtime: '2.5-3 saat',
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2221500/header.jpg?t=1730124471'
  },
  {
    name: 'Halu - The Fracture',
    type: 'korku',
    playtime: '1 saat',
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3893210/e8c64e4126aa7892741ee9c8de936b3eadb13b33/header.jpg?t=1759002158'
  },
  {
    name: 'The Tall Man Tapes',
    type: 'korku',
    playtime: '1 saat',
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3369940/1db13731da19cd14a71b6a1c1fc41abf6b496b01/header.jpg?t=1771883392'
  },
  {
    name: 'Let Me In',
    type: 'korku, demo',
    playtime: '1 saat',
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4224400/68a891560fbdbc57cd0f2ff21ed2fd1ba8d7cdcb/header.jpg?t=1776778481'
  },
  {
    name: 'Lair of Torment',
    type: 'korku',
    playtime: '30 dakika',
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2508210/header.jpg?t=1776012905'
  },
  {
    name: 'Make Good Choices',
    type: 'anomali',
    playtime: '1 saat',
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3410310/header.jpg?t=1737678394'
  },
  {
    name: "Willie's Nightfall",
    type: 'korku',
    playtime: '40 dakika',
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3198320/header.jpg?t=1737268713'
  },
  {
    name: '[Nightmare Files] Clap Clap',
    type: 'korku',
    playtime: '25 dakika',
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2933290/header.jpg?t=1765139513'
  },
  {
    name: 'Supernormal',
    type: 'korku',
    playtime: '1 saat 20 dakika',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2532430/header.jpg?t=1733831256'
  },
  {
    name: 'HorrorCore: Labirent ve Korku Havuzları',
    type: 'korku',
    playtime: '50 dakika',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3440410/header.jpg?t=1769786355'
  },
  {
    name: 'İblis 2',
    type: 'korku',
    playtime: '1 saat',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2205460/header.jpg?t=1699556680'
  },
  {
    name: 'Agreee',
    type: 'korku',
    playtime: '10 dakika - sonsuz saat',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3757210/ae36ecedeb4d9f65ed7aa58f8f7dc2d47976d745/header.jpg?t=1769849353'
  }
];


const chillGames = [
  {
    name: 'Lemon Cake',
    desc: 'Eski bir fırını onar, malzemeleri yetiştir ve tatlılar pişir.',
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1338330/header.jpg?t=1667869401',
    time: '17-20 Saat',
    tags: ['üretim']
  },
  {
    name: 'Magical Delicacy',
    desc: 'Kendi dükkanında büyülü yemekler pişir ve kasabaya teslim et.',
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2231190/6406b69136197a10fb03307c3cca986f304eefbb/header.jpg?t=1769018053',
    time: '20-30 Saat',
    tags: ['üretim']
  },
  {
    name: 'Melatonin',
    desc: 'Rüyalar ve gerçeğin birbirine karıştığı büyüleyici bir ritim oyunu.',
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1585220/header.jpg?t=1745444179',
    time: '2-3 Saat',
    tags: ['tıklama']
  },
  {
    name: 'Assemble with Care',
    desc: 'Değerli antikaları tamir et ve eşyaların arkasındaki hikayeleri çöz.',
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1202900/header.jpg?t=1762967969',
    time: '1-2 Saat',
    tags: ['tıklama']
  },
  {
    name: 'Cast n Chill',
    desc: 'Ekranının bir köşesinde balık tut, sadece arkana yaslan ve rahatla.',
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3483740/b3861b297ccb9284cd066c91f57b8b97b8e9fa91/header_alt_assets_4.jpg?t=1770355191',
    time: '17-20 Saat',
    tags: ['tıklama']
  },
  {
    name: 'Last Day of June',
    desc: 'Sevdiklerini kurtarmak için geçmişi değiştirdiğin duygusal bir yolculuk.',
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/635320/header.jpg?t=1634642828',
    time: '3-4 Saat',
    tags: ['dünya']
  },
  {
    name: 'Easy Delivery Co.',
    desc: 'Paketleri zamanında ve güvenle teslim etmeye çalıştığın rahat bir simülasyon.',
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3293010/2d0ded07083fd997234193517d5a6c65a1cf7920/header.jpg?t=1774775396',
    time: '5-8 Saat',
    tags: ['dünya']
  },
  {
    name: 'Carto',
    desc: 'Dünya haritasını parçalara ayır ve yolu bulmak için yeniden birleştir.',
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172450/header.jpg?t=1773690780',
    time: '6-8 Saat',
    tags: ['dünya']
  },
  {
    name: 'Papa\'s Pizzeria Deluxe',
    desc: 'Efsanevi pizzacı geri döndü! Hamuru aç, malzemeleri diz, müşterileri doyur.',
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3259470/header.jpg?t=1732030361',
    time: '30 Saat',
    tags: ['üretim']
  },
  {
    name: 'Good Pizza Great Pizza',
    desc: 'Kendi dükkanını işlet, rakiplerinle yarış ve en iyi pizzayı yap.',
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/770810/header_turkish.jpg?t=1754518216',
    time: '20-25 Saat',
    tags: ['üretim']
  },
  {
    name: 'Tiny Glade',
    desc: 'Izgara yok, yönetim stresi yok. Sadece huzurlu bir şekilde kaleler inşa et.',
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2198150/header.jpg?t=1774883465',
    time: '3-5 Saat',
    tags: ['ev yap']
  },
  {
    name: 'PowerWash Sim',
    desc: 'Basınçlı suyun rahatlatıcı sesiyle en inatçı kirleri bile temizle.',
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1290000/header.jpg?t=1756929451',
    time: '50 Saat',
    tags: ['ADHD']
  },
  {
    name: 'PowerWash Sim 2',
    desc: 'Yeni mekanlar ve daha güçlü araçlarla temizlik keyfine devam et.',
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2968420/91fea40a711c5a74cce1bb1a9e05c48a379f6aa0/header.jpg?t=1768317251',
    time: '40 Saat',
    tags: ['ADHD']
  },
  {
    name: 'MakeRoom',
    desc: 'Minyatür odalar tasarla, eşyaları yerleştir ve hayalindeki alanı yarat.',
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2212670/228d1445433d45248e40abb0e402a6934199d569/header.jpg?t=1772889346',
    time: '2-3 Saat',
    tags: ['ev yap']
  },
  {
    name: 'Birth',
    desc: 'Yalnızlığını gidermek için kemiklerden ve organlardan bir arkadaş inşa et.',
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1889040/header.jpg?t=1739362118',
    time: '2 Saat',
    tags: ['bulmaca']
  },
  {
    name: 'House Flipper',
    desc: 'Harabe haldeki evleri satın al, tamir et, baştan döşe ve kârla sat.',
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/613100/6cee40fe293f0bab47534e78bcda64487902efc1/header.jpg?t=1775231659',
    time: '13-30 Saat',
    tags: ['ev yap']
  },
  {
    name: 'House Flipper 2',
    desc: 'Daha iyi grafikler ve yeni mekaniklerle en iyi ev yenileme deneyimi.',
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1190970/a8c4bf872d073e27e96c2179e19a5cd9971bfd2e/header.jpg?t=1775023916',
    time: '14-22 Saat',
    tags: ['ev yap']
  },
  {
    name: 'Viewfinder',
    desc: 'Fotoğrafları dünyaya yerleştirerek gerçekliği bük ve bulmacaları çöz.',
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1382070/a69eb56f73446624325dec8a4fe74dc4ae09fb96/header.jpg?t=1764842475',
    time: '5 Saat',
    tags: ['chill yürüme']
  },
  {
    name: 'Superliminal',
    desc: 'Bakış açını değiştirerek nesnelerin boyutunu değiştirdiğin rüya dünyası.',
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1049410/header.jpg?t=1755294276',
    time: '2-3 Saat',
    tags: ['bulmaca']
  },
  {
    name: 'Potion Craft',
    desc: 'Malzemeleri öğüt, kazanı karıştır ve kasabalılar için iksirler hazırla.',
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1210320/header.jpg?t=1775228161',
    time: '18-28 Saat',
    tags: ['üretim']
  },
  {
    name: 'Bulb Boy',
    desc: 'Karanlık bir evde parlayan kafanla ürkütücü bulmacaları çöz.',
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/390290/header.jpg?t=1762291079',
    time: '2 Saat',
    tags: ['macera']
  },
  {
    name: 'Impostor Factory',
    desc: 'To the Moon serisinden çılgın bir zaman döngüsü ve cinayet gizemi.',
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1182620/header.jpg?t=1726196467',
    time: '4 Saat',
    tags: ['dünya']
  },
  {
    name: 'DAVE THE DIVER',
    desc: 'Gündüzleri derin okyanusu keşfet, geceleri başarılı bir suşi dükkanı işlet.',
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1868140/81bdb3bce15d27ca1b4554a642d91096e89be229/header.jpg?t=1775198556',
    time: '25-35 Saat',
    tags: ['dünya']
  },
  {
    name: 'Gone Home',
    desc: 'Yurtdışından evine döndün ama kimse yok. Ailene ne olduğunu çöz.',
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/232430/header.jpg?t=1756162182',
    time: '2-3 Saat',
    tags: ['yürüme']
  },
  {
    name: 'Journey',
    desc: 'Uçsuz bucaksız çölleri aş ve gizemli bir dağa doğru yolculuğa çık.',
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/638230/header.jpg?t=1729099361',
    time: '2-3 Saat',
    tags: ['chill yürüme']
  },
  {
    name: 'Vampire Survivors',
    desc: 'Üzerine gelen binlerce yaratığa karşı sadece yürüyerek hayatta kal.',
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1794680/header.jpg?t=1763675244',
    time: '20 Saat',
    tags: ['macera']
  },
  {
    name: 'Do Not Feed Monkeys',
    desc: 'Kafeslerdeki insanları gizlice izle, sırlar öğren ama sakın onlarla konuşma.',
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/658850/header.jpg?t=1773119823',
    time: '5-7 Saat',
    tags: ['tıklama']
  },
  {
    name: 'Silence',
    desc: 'Savaşın ortasında sessiz ve büyülü bir dünyaya kaçan kardeşlerin hikayesi.',
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/314790/header.jpg?t=1734630128',
    time: '3-6 Saat',
    tags: ['macera']
  },
  {
    name: 'A Short Hike',
    desc: 'Huzurlu bir ada parkında zirveye tırman, uç, balık tut ve keşfet.',
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1055540/header.jpg?t=1755182478',
    time: '1-2 Saat',
    tags: ['dünya']
  },
  {
    name: 'SUMMERHOUSE',
    desc: 'Küçük, nostaljik ve yaşanmışlık dolu mahalleler kur. Kural yok.',
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2533960/header.jpg?t=1767702402',
    time: '1 Saat',
    tags: ['ev yap']
  },
  {
    name: 'Level Devil',
    desc: 'Seni kandırmak için tasarlanmış sinir bozucu ama bağımlılık yapan platform oyunu.',
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3242750/header.jpg?t=1774446792',
    time: '3-6 Saat',
    tags: ['bulmaca']
  },
  {
    name: 'FIGHT-QUEST',
    desc: 'Dövüş ve macera dolu bu demoda kılıcını kaldır, düşmanlarını alt et.',
    img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3685570/c8efdb9c6a5ff7c34818bd649c9d263140b66155/header.jpg?t=1773699437',
    time: 'Demo',
    tags: ['demo', 'macera']
  },
  {
    name: 'White Knuckle',
    desc: 'Çöken bir dünyada duvarlara tırmanarak hayatta kalmaya çalıştığın yüksek tempolu bir ko-op oyun.',
    img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3195790/header.jpg?t=1767974773',
    time: '1 saat - sonsuz',
    tags: ['macera']
  },
  {
    name: 'Agreee',
    desc: 'Ne kadar oynayacağını kendin belirle. 10 dakika da olur, bir ömür de.',
    img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3757210/ae36ecedeb4d9f65ed7aa58f8f7dc2d47976d745/header.jpg?t=1769849353',
    time: '10 dakika - sonsuz',
    tags: ['tıklama']
  }
];


window.chillTagsExcluded = new Set();


const wishlist = [
  { name: 'Dispatch', steamId: '2592160' },
  { name: 'AT DEAD OF NIGHT', steamId: '1450830' },
  { name: 'Fears The Fathom', steamId: '1671340' },
  { name: 'Luto', steamId: '1729740' },
  { name: 'MARTHA IS DEAD', steamId: '515960' },
  { name: 'the quarry', steamId: '1577120' },
  { name: 'cronos', steamId: '2101960' },
  { name: 'madison', steamId: '1670870' },
  { name: 'high on life', steamId: '1583230' },
  {
    name: 'Date or Destiny Kiss or Miss',
    steamId: '2127030',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2127030/f447ac90059534b1397b5de6fc2b004e5729d6cf/header.jpg?t=1751035600'
  },
  {
    name: 'silent hill f',
    steamId: '2947440',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2947440/7e5d923ac622bd1775ebc9b5d4b5b0a24bf5ed40/header.jpg?t=1770169624'
  },
  { name: 'Katana ZERO', steamId: '460950' },
  {
    name: 'Half-Life (Türkçe)',
    steamId: '70',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/70/header.jpg?t=1745368462',
    overlayIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Roundel_flag_of_Turkey.svg/500px-Roundel_flag_of_Turkey.svg.png'
  },
  {
    name: 'Paranormal Tales',
    steamId: '2193600',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2193600/header.jpg?t=1760022653'
  },
  {
    name: 'Perceptum',
    steamId: '4124340',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4124340/6a7fed1f457e84212554c79eaf3e90c25b056b0f/header.jpg?t=1770842900'
  },
  {
    name: 'Goodnight Universe',
    steamId: '2416100',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2416100/header.jpg?t=1763335395'
  },
  {
    name: 'The Walking Dead',
    steamId: '207610',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/207610/header.jpg?t=1729702559'
  },
  {
    name: 'High On Life 2',
    steamId: '2069250',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2069250/14a0a45da992ca33d59eb318b5cb9598c070e1c1/header.jpg?t=1771480792'
  }
];


const favoriteGames = [
  'The Maid',
  'Gas Station Case',
  'Skull Hotel',
  'No, I\'m not a Human',
  'HELLMART',
  'Last Report',
  'We Used to Play Here',
  'Agreee'
];


let gameList = [...allGames];

const dialogueTree = {
  start: {
    text: "Hey… yalnız mısın?",
    choices: [
      { label: "Evet, yalnızım.", next: 'alone' },
      { label: "Hayır, yalnız değilim.", next: 'not_alone' }
    ]
  },
  alone: {
    text: "Şanslısın… Bu sıcakta kalabalık çekilmiyor. Ankara'nın sıcağı artık derimizi yakıyor. İnsan dışarıda beş dakika durunca nefesi kesiliyor.",
    next: 'stream_q'
  },
  not_alone: {
    text: "Öyle mi… İlginç. İçeriden sesler geliyor gibi.",
    next: 'ankara_heat'
  },
  ankara_heat: {
    text: "Bu sıcakta kalabalık çekilmiyor. Ankara'nın sıcağı artık derimizi yakıyor. İnsan dışarıda beş dakika durunca nefesi kesiliyor.",
    next: 'stream_q'
  },
  stream_q: {
    text: "Seni daha önce bir yerde görmüş gibiyim… Yayıncı mısın?",
    choices: [
      { label: "Evet, yayın yapıyorum.", next: 'stream_yes' },
      { label: "Hayır.", next: 'stream_no' }
    ]
  },
  stream_yes: {
    text: "Vay be… Ben de eskiden yayın yapardım. Ama o günler çok geride kaldı.",
    next: 'final'
  },
  stream_no: {
    text: "Anladım… Eskiden ben de yayın yapardım. Ama o günler çok geride kaldı.",
    next: 'final'
  },
  final: {
    text: "Oyunları seçmende belki sana yardımcı olurum. Neden beni içeri almıyorsun?",
    choices: [
      { label: "İçeri gel.", next: 'enter' },
      { label: "Git buradan.", next: 'reject' }
    ]
  },
  enter: {
    action: () => {
      document.getElementById('narrative-screen').style.display = 'none';
      document.getElementById('jumpscare').style.display = 'block';
      setTimeout(() => {
        alert('ÖLDÜN.');
        location.reload();
      }, 2000);
    }
  },
  reject: {
    action: () => {
      document.getElementById('npcText').innerHTML = '"Pişman olacaksın..."';
      document.getElementById('playerOptions').innerHTML = '';
      setTimeout(() => {
        document.getElementById('narrative-screen').style.display = 'none';
        gameState = 'CORRIDOR';
        controls.lock();
      }, 1500);
    }
  }
};
