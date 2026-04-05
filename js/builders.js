function addCeilingLamp(scene,cx,cy,cz){const lampGroup=new THREE.Group();lampGroup.position.set(cx,cy,cz);const base=new THREE.Mesh(new THREE.CylinderGeometry(0.2,0.2,0.05,16),new THREE.MeshStandardMaterial({color:0x222222,metalness:0.8,roughness:0.3}));base.position.y=0;lampGroup.add(base);const bulb=new THREE.Mesh(new THREE.SphereGeometry(0.12,16,16),new THREE.MeshBasicMaterial({color:0xffdd88}));bulb.position.y=-0.08;lampGroup.add(bulb);scene.add(lampGroup);}
function addTrims(scene,cx,cz){const texWood=createWoodTexture('#1a0a02','10,5,0');const trimMat=new THREE.MeshStandardMaterial({map:texWood,roughness:0.9,bumpMap:texWood,bumpScale:0.02});const bGeo=new THREE.BoxGeometry(12,0.3,0.1);const cGeo=new THREE.BoxGeometry(12,0.2,0.2);const b1=new THREE.Mesh(bGeo,trimMat);b1.position.set(cx,0.15,cz-5.95);scene.add(b1);const b2=new THREE.Mesh(bGeo,trimMat);b2.position.set(cx,0.15,cz+5.95);scene.add(b2);const b3=new THREE.Mesh(bGeo,trimMat);b3.position.set(cx-5.95,0.15,cz);b3.rotation.y=Math.PI/2;scene.add(b3);const b4=new THREE.Mesh(bGeo,trimMat);b4.position.set(cx+5.95,0.15,cz);b4.rotation.y=Math.PI/2;scene.add(b4);const c1=new THREE.Mesh(cGeo,trimMat);c1.position.set(cx,4.4,cz-5.9);scene.add(c1);const c2=new THREE.Mesh(cGeo,trimMat);c2.position.set(cx,4.4,cz+5.9);scene.add(c2);const c3=new THREE.Mesh(cGeo,trimMat);c3.position.set(cx-5.9,4.4,cz);c3.rotation.y=Math.PI/2;scene.add(c3);const c4=new THREE.Mesh(cGeo,trimMat);c4.position.set(cx+5.9,4.4,cz);c4.rotation.y=Math.PI/2;scene.add(c4);}
function addKnob(d, flip=false){const kG=new THREE.SphereGeometry(0.08,32,32);const kM=new THREE.MeshStandardMaterial({color:0xd4af37,metalness:0.9,roughness:0.3});const k1=new THREE.Mesh(kG,kM);k1.position.set(0.75,0,0.12);const k2=new THREE.Mesh(kG,kM);k2.position.set(-0.75,0,-0.12);d.add(k1);d.add(k2);}
function buildLShapeCorridor(){const wallTex=createRetroWallTexture();const floorTex=createFloorTexture();const ceilTex=createCeilingTexture();const wallMat=new THREE.MeshStandardMaterial({map:wallTex,bumpMap:wallTex,bumpScale:0.03,side:THREE.DoubleSide,roughness:0.8,metalness:0.1});const floorMat=new THREE.MeshStandardMaterial({map:floorTex,bumpMap:floorTex,bumpScale:0.02,roughness:0.4});const floor=new THREE.Mesh(new THREE.PlaneGeometry(5,18),floorMat);floor.rotation.x=-Math.PI/2;floor.position.set(0,0,-3);scene.add(floor);const ceil=new THREE.Mesh(new THREE.PlaneGeometry(5,18),new THREE.MeshStandardMaterial({map:ceilTex,roughness:0.9}));ceil.rotation.x=Math.PI/2;ceil.position.set(0,4.5,-3);scene.add(ceil);const wallL=new THREE.Mesh(new THREE.PlaneGeometry(18,4.5),wallMat);wallL.rotation.y=Math.PI/2;wallL.position.set(-2.5,2.25,-3);scene.add(wallL);const wallR=new THREE.Mesh(new THREE.PlaneGeometry(18,4.5),wallMat);wallR.rotation.y=-Math.PI/2;wallR.position.set(2.5,2.25,-3);scene.add(wallR);const wallB=new THREE.Mesh(new THREE.PlaneGeometry(5,4.5),wallMat);wallB.position.set(0,2.25,6);scene.add(wallB);const wallF=new THREE.Mesh(new THREE.PlaneGeometry(5,4.5),wallMat);wallF.position.set(0,2.25,-12);scene.add(wallF);const dGeo=new THREE.BoxGeometry(2.0,3.2,0.15);const doorTex=createDoorTexture(false);const outerDoorTex=createDoorTexture(true);const chillDoorTex=createPinkPatternDoor();const doorMat=new THREE.MeshStandardMaterial({map:doorTex,bumpMap:doorTex,bumpScale:0.04,roughness:0.6});const woodFrameTex=createWoodTexture('#2a1508','10,5,0');const frameGeo=new THREE.BoxGeometry(2.4,3.4,0.25);const frameMat=new THREE.MeshStandardMaterial({map:woodFrameTex,roughness:0.8});const roomDoor=new THREE.Mesh(dGeo,doorMat);roomDoor.position.set(-2.35,1.6,0);roomDoor.rotation.y=Math.PI/2;roomDoor.userData={type:'GO_TO_SECRET_ROOM'};scene.add(roomDoor);objects.push(roomDoor);addKnob(roomDoor);const sf=new THREE.Mesh(frameGeo,frameMat);sf.position.set(-2.45,1.7,0);sf.rotation.y=Math.PI/2;scene.add(sf);const casinoDoor=new THREE.Mesh(dGeo,doorMat);casinoDoor.position.set(2.35,1.6,0);casinoDoor.rotation.y=-Math.PI/2;casinoDoor.userData={type:'GO_TO_CASINO'};scene.add(casinoDoor);objects.push(casinoDoor);addKnob(casinoDoor);const cf=new THREE.Mesh(frameGeo,frameMat);cf.position.set(2.45,1.7,0);cf.rotation.y=-Math.PI/2;scene.add(cf);const mainDoor=new THREE.Mesh(dGeo,new THREE.MeshStandardMaterial({map:outerDoorTex,bumpMap:outerDoorTex,bumpScale:0.05,roughness:0.7}));mainDoor.position.set(0,1.6,-11.85);mainDoor.userData={type:'OUTER_DOOR'};scene.add(mainDoor);objects.push(mainDoor);addKnob(mainDoor);const of=new THREE.Mesh(frameGeo,frameMat);of.position.set(0,1.7,-11.95);scene.add(of);const chDoor=new THREE.Mesh(dGeo,new THREE.MeshStandardMaterial({map:chillDoorTex,roughness:0.4}));chDoor.position.set(0,1.6,5.85);chDoor.userData={type:'GO_TO_CHILL_ROOM'};scene.add(chDoor);objects.push(chDoor);addKnob(chDoor,true);const chf=new THREE.Mesh(frameGeo,frameMat);chf.position.set(0,1.7,5.95);scene.add(chf);const tGeo=new THREE.BoxGeometry(5,0.3,0.1);const tm=new THREE.MeshStandardMaterial({map:woodFrameTex});const t1=new THREE.Mesh(tGeo,tm);t1.position.set(0,0.15,-11.95);scene.add(t1);const t2=new THREE.Mesh(tGeo,tm);t2.position.set(0,0.15,5.95);scene.add(t2);const t3=new THREE.Mesh(new THREE.BoxGeometry(18,0.3,0.1),tm);t3.position.set(-2.45,0.15,-3);t3.rotation.y=Math.PI/2;scene.add(t3);const t4=new THREE.Mesh(new THREE.BoxGeometry(18,0.3,0.1),tm);t4.position.set(2.45,0.15,-3);t4.rotation.y=Math.PI/2;scene.add(t4);}
function buildSecretRoom(){const wallTex=createRetroWallTexture('#223344');const floorTex=createFloorTexture('#4a2a18','#381d0f');const ceilTex=createCeilingTexture();const wallMat=new THREE.MeshStandardMaterial({map:wallTex,bumpMap:wallTex,bumpScale:0.03,side:THREE.DoubleSide,roughness:0.8,metalness:0.1});const floorMat=new THREE.MeshStandardMaterial({map:floorTex,bumpMap:floorTex,bumpScale:0.02,roughness:0.3});const cx=100,cz=0;secretRoomLight=new THREE.PointLight(0xffeedd,1.5,30);secretRoomLight.position.set(cx,4.0,cz);scene.add(secretRoomLight);addCeilingLamp(scene,cx,4.45,cz);const floor=new THREE.Mesh(new THREE.PlaneGeometry(12,12),floorMat);floor.rotation.x=-Math.PI/2;floor.position.set(cx,0,cz);scene.add(floor);const ceil=new THREE.Mesh(new THREE.PlaneGeometry(12,12),new THREE.MeshStandardMaterial({map:ceilTex,roughness:0.9}));ceil.rotation.x=Math.PI/2;ceil.position.set(cx,4.5,cz);scene.add(ceil);const wGeo=new THREE.PlaneGeometry(12,4.5);const w1=new THREE.Mesh(wGeo,wallMat);w1.position.set(cx,2.25,cz-6);scene.add(w1);const w2=new THREE.Mesh(wGeo,wallMat);w2.position.set(cx,2.25,cz+6);w2.rotation.y=Math.PI;scene.add(w2);const w3=new THREE.Mesh(wGeo,wallMat);w3.position.set(cx-6,2.25,cz);w3.rotation.y=Math.PI/2;scene.add(w3);const w4=new THREE.Mesh(wGeo,wallMat);w4.position.set(cx+6,2.25,cz);w4.rotation.y=-Math.PI/2;scene.add(w4);addTrims(scene,cx,cz);const doorTex=createDoorTexture(false);const exitDoor=new THREE.Mesh(new THREE.BoxGeometry(2.0,3.2,0.15),new THREE.MeshStandardMaterial({map:doorTex,bumpMap:doorTex,bumpScale:0.04,roughness:0.6}));exitDoor.position.set(cx,1.6,cz+5.85);exitDoor.rotation.y=Math.PI;exitDoor.userData={type:'GO_TO_CORRIDOR'};scene.add(exitDoor);objects.push(exitDoor);addKnob(exitDoor,true);const woodFrameTex=createWoodTexture('#2a1508','10,5,0');const eFrame=new THREE.Mesh(new THREE.BoxGeometry(2.4,3.4,0.25),new THREE.MeshStandardMaterial({map:woodFrameTex,roughness:0.8}));eFrame.position.set(cx,1.7,cz+5.95);scene.add(eFrame);const textureLoader=new THREE.TextureLoader();const tabloMat2=new THREE.MeshStandardMaterial({color:0x888888,roughness:0.5});textureLoader.load('code/tablo2.png',function(tex){tabloMat2.map=tex;tabloMat2.needsUpdate=true;});const tablo2Mesh=new THREE.Mesh(new THREE.PlaneGeometry(3.0,3.8),tabloMat2);tablo2Mesh.position.set(cx,2.35,cz-5.9);scene.add(tablo2Mesh);const tFrame2=new THREE.Mesh(new THREE.BoxGeometry(3.2,4.0,0.05),new THREE.MeshStandardMaterial({map:woodFrameTex,roughness:0.5}));tFrame2.position.set(cx,2.35,cz-5.95);scene.add(tFrame2);const tabloMat3=new THREE.MeshStandardMaterial({color:0x888888,roughness:0.5});textureLoader.load('code/tablo3.png',function(tex){tabloMat3.map=tex;tabloMat3.needsUpdate=true;});const tablo3Mesh=new THREE.Mesh(new THREE.PlaneGeometry(1.8,1.2),tabloMat3);tablo3Mesh.position.set(cx-3,2.5,cz+5.9);tablo3Mesh.rotation.y=Math.PI;scene.add(tablo3Mesh);const tFrame3=new THREE.Mesh(new THREE.BoxGeometry(2.0,1.4,0.05),new THREE.MeshStandardMaterial({map:woodFrameTex,roughness:0.5}));tFrame3.position.set(cx-3,2.5,cz+5.95);tFrame3.rotation.y=Math.PI;scene.add(tFrame3);const tableGroup=new THREE.Group();tableGroup.position.set(cx,0,cz);scene.add(tableGroup);const leg=new THREE.Mesh(new THREE.CylinderGeometry(0.4,0.8,0.9,32),new THREE.MeshStandardMaterial({map:woodFrameTex,roughness:0.6}));leg.position.y=0.45;tableGroup.add(leg);const legBase=new THREE.Mesh(new THREE.CylinderGeometry(1.2,1.2,0.1,64),new THREE.MeshStandardMaterial({color:0x111,metalness:0.8,roughness:0.3}));legBase.position.y=0.05;tableGroup.add(legBase);const wheelTex=createRouletteTexture(allGames,false);const wheelMats=[new THREE.MeshStandardMaterial({color:0xb8860b,metalness:0.9,roughness:0.2}),new THREE.MeshStandardMaterial({map:wheelTex,roughness:0.95,metalness:0.0}),new THREE.MeshStandardMaterial({color:0x222,roughness:0.8})];wheelMesh=new THREE.Mesh(new THREE.CylinderGeometry(2.2,2.2,0.2,128),wheelMats);wheelMesh.position.y=1.0;wheelMesh.userData={type:'WHEEL_HORROR'};tableGroup.add(wheelMesh);objects.push(wheelMesh);const socketY=1.1;const socket=new THREE.Mesh(new THREE.TorusGeometry(0.55,0.05,32,64),new THREE.MeshStandardMaterial({color:0xffd700,metalness:0.9,roughness:0.1}));socket.rotation.x=Math.PI/2;socket.position.y=socketY;tableGroup.add(socket);eyeGroup=new THREE.Group();eyeGroup.position.set(0,socketY,0);tableGroup.add(eyeGroup);const eyeTex=createEyeTexture();const sclera=new THREE.Mesh(new THREE.SphereGeometry(0.48,64,64),new THREE.MeshStandardMaterial({map:eyeTex,roughness:0.05,metalness:0.1,clearcoat:1.0,clearcoatRoughness:0.1}));sclera.rotation.y=-Math.PI/2;eyeGroup.add(sclera);const jumbotronMats=[new THREE.MeshBasicMaterial({map:imageScreenTex}),new THREE.MeshBasicMaterial({map:imageScreenTex}),new THREE.MeshStandardMaterial({color:0x222222,metalness:0.8,roughness:0.4}),new THREE.MeshStandardMaterial({color:0x222222,metalness:0.8,roughness:0.4}),new THREE.MeshBasicMaterial({map:textScreenTex}),new THREE.MeshBasicMaterial({map:textScreenTex})];
const jumbotron=new THREE.Mesh(new THREE.BoxGeometry(1.5,0.8,1.5),jumbotronMats);jumbotron.position.set(cx,3.2,cz);scene.add(jumbotron);const pole=new THREE.Mesh(new THREE.CylinderGeometry(0.08,0.08,1.3,32),new THREE.MeshStandardMaterial({color:0x111,metalness:0.9,roughness:0.2}));pole.position.set(cx,3.85,cz);scene.add(pole);const buttonPanelGroup=new THREE.Group();buttonPanelGroup.position.set(cx-5.95,1.5,cz);buttonPanelGroup.rotation.y=Math.PI/2;scene.add(buttonPanelGroup);const panel=new THREE.Mesh(new THREE.BoxGeometry(1.8,0.8,0.15),new THREE.MeshStandardMaterial({color:0x666666,metalness:0.4,roughness:0.6}));buttonPanelGroup.add(panel);const btnActions=['BTN_WHEEL_LIST','BTN_WISHLIST','BTN_DISCO'];for(let i=0;i<3;i++){const btn=new THREE.Mesh(new THREE.CylinderGeometry(0.12,0.12,0.1,64).rotateX(Math.PI/2),new THREE.MeshStandardMaterial({color:0xaa0000,roughness:0.2,metalness:0.5}));btn.position.set(-0.6+i*0.6,0,0.08);btn.userData={type:btnActions[i],originalZ:0.08,isPressed:false};buttonPanelGroup.add(btn);objects.push(btn);}const dtGroup=new THREE.Group();dtGroup.position.set(cx+4.5,0,cz+4.5);scene.add(dtGroup);const lGeo=new THREE.CylinderGeometry(0.1,0.05,0.8,32);const lMat=new THREE.MeshStandardMaterial({map:woodFrameTex,roughness:0.7});for(let i of[-0.6,0.6]){for(let j of[-0.6,0.6]){const l=new THREE.Mesh(lGeo,lMat);l.position.set(i,0.4,j);dtGroup.add(l);}}const feltTex=createFeltTexture('#0a4a1a');const trayBase=new THREE.Mesh(new THREE.BoxGeometry(1.4,0.1,1.4),new THREE.MeshStandardMaterial({map:feltTex,roughness:0.9}));trayBase.position.y=0.85;dtGroup.add(trayBase);const bGeoX=new THREE.BoxGeometry(1.6,0.2,0.1);const bGeoZ=new THREE.BoxGeometry(0.1,0.2,1.4);const bMat=new THREE.MeshStandardMaterial({map:woodFrameTex,roughness:0.7});const b1=new THREE.Mesh(bGeoX,bMat);b1.position.set(0,0.95,0.75);dtGroup.add(b1);const b2=new THREE.Mesh(bGeoX,bMat);b2.position.set(0,0.95,-0.75);dtGroup.add(b2);const b3=new THREE.Mesh(bGeoZ,bMat);b3.position.set(0.75,0.95,0);dtGroup.add(b3);const b4=new THREE.Mesh(bGeoZ,bMat);b4.position.set(-0.75,0.95,0);dtGroup.add(b4);diceCtx1=document.createElement('canvas').getContext('2d');diceCtx1.canvas.width=256;diceCtx1.canvas.height=256;diceCtx2=document.createElement('canvas').getContext('2d');diceCtx2.canvas.width=256;diceCtx2.canvas.height=256;let diceTex1=new THREE.CanvasTexture(diceCtx1.canvas);let diceTex2=new THREE.CanvasTexture(diceCtx2.canvas);drawDiceCanvas(diceCtx1,6);drawDiceCanvas(diceCtx2,6);dice1Mesh=new THREE.Mesh(new THREE.BoxGeometry(0.3,0.3,0.3),new THREE.MeshStandardMaterial({map:diceTex1,roughness:0.3,metalness:0.1}));dice1Mesh.position.set(cx+4.15,1.05,cz+4.5);dice1Mesh.rotation.set(0,Math.PI/4,0);dice1Mesh.userData={type:'ROLL_3D_DICE'};scene.add(dice1Mesh);objects.push(dice1Mesh);dice2Mesh=new THREE.Mesh(new THREE.BoxGeometry(0.3,0.3,0.3),new THREE.MeshStandardMaterial({map:diceTex2,roughness:0.3,metalness:0.1}));dice2Mesh.position.set(cx+4.85,1.05,cz+4.4);dice2Mesh.rotation.set(0,Math.PI/6,0);dice2Mesh.userData={type:'ROLL_3D_DICE'};scene.add(dice2Mesh);objects.push(dice2Mesh);}
function buildCasinoRoom(){const wallTex=createRetroWallTexture('#2e3a2e');const floorTex=createFloorTexture('#1a0f05','#110a02');const ceilTex=createCeilingTexture();const wallMat=new THREE.MeshStandardMaterial({map:wallTex,bumpMap:wallTex,bumpScale:0.03,side:THREE.DoubleSide,roughness:0.8,metalness:0.1});const floorMat=new THREE.MeshStandardMaterial({map:floorTex,bumpMap:floorTex,bumpScale:0.02,roughness:0.3});const cx=-100,cz=0;const light=new THREE.PointLight(0xffddaa,1.5,30);light.position.set(cx,4.0,cz);scene.add(light);addCeilingLamp(scene,cx,4.45,cz);const floor=new THREE.Mesh(new THREE.PlaneGeometry(12,12),floorMat);floor.rotation.x=-Math.PI/2;floor.position.set(cx,0,cz);scene.add(floor);const ceil=new THREE.Mesh(new THREE.PlaneGeometry(12,12),new THREE.MeshStandardMaterial({map:ceilTex,roughness:0.9}));ceil.rotation.x=Math.PI/2;ceil.position.set(cx,4.5,cz);scene.add(ceil);const wGeo=new THREE.PlaneGeometry(12,4.5);const w1=new THREE.Mesh(wGeo,wallMat);w1.position.set(cx,2.25,cz-6);scene.add(w1);const w2=new THREE.Mesh(wGeo,wallMat);w2.position.set(cx,2.25,cz+6);w2.rotation.y=Math.PI;scene.add(w2);const w3=new THREE.Mesh(wGeo,wallMat);w3.position.set(cx-6,2.25,cz);w3.rotation.y=Math.PI/2;scene.add(w3);const w4=new THREE.Mesh(wGeo,wallMat);w4.position.set(cx+6,2.25,cz);w4.rotation.y=-Math.PI/2;scene.add(w4);addTrims(scene,cx,cz);const doorTex=createDoorTexture(false);const exitDoor=new THREE.Mesh(new THREE.BoxGeometry(2.0,3.2,0.15),new THREE.MeshStandardMaterial({map:doorTex,bumpMap:doorTex,bumpScale:0.04,roughness:0.6}));exitDoor.position.set(cx,1.6,cz-5.85);exitDoor.rotation.y=Math.PI;exitDoor.userData={type:'GO_TO_CORRIDOR'};scene.add(exitDoor);objects.push(exitDoor);addKnob(exitDoor,true);const woodFrameTex=createWoodTexture('#2a1508','10,5,0');const eFrame=new THREE.Mesh(new THREE.BoxGeometry(2.4,3.4,0.25),new THREE.MeshStandardMaterial({map:woodFrameTex,roughness:0.8}));eFrame.position.set(cx,1.7,cz-5.95);scene.add(eFrame);const textureLoader=new THREE.TextureLoader();const tabloMat1=new THREE.MeshStandardMaterial({color:0x888888,roughness:0.5});textureLoader.load('code/tablo1.png',function(tex){tabloMat1.map=tex;tabloMat1.needsUpdate=true;});const tablo1Mesh=new THREE.Mesh(new THREE.PlaneGeometry(3.0,3.8),tabloMat1);tablo1Mesh.position.set(cx-5.9,2.35,cz);tablo1Mesh.rotation.y=Math.PI/2;scene.add(tablo1Mesh);const tFrame1=new THREE.Mesh(new THREE.BoxGeometry(3.2,4.0,0.05),new THREE.MeshStandardMaterial({map:woodFrameTex,roughness:0.5}));tFrame1.position.set(cx-5.95,2.35,cz);tFrame1.rotation.y=Math.PI/2;scene.add(tFrame1);const feltTex=createFeltTexture('#0a4a1a');const bjTable=new THREE.Mesh(new THREE.CylinderGeometry(1.5,1.5,0.1,64),new THREE.MeshStandardMaterial({map:feltTex,roughness:0.9}));bjTable.position.set(cx,0.8,cz+1);bjTable.userData={type:'PLAY_BLACKJACK'};scene.add(bjTable);objects.push(bjTable);const leatherTex=createLeatherTexture('#1a0d05');const rim=new THREE.Mesh(new THREE.TorusGeometry(1.5,0.15,32,64),new THREE.MeshStandardMaterial({map:leatherTex,roughness:0.7}));rim.position.set(cx,0.85,cz+1);rim.rotation.x=Math.PI/2;scene.add(rim);const pLeg=new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.6,0.8,64),new THREE.MeshStandardMaterial({map:woodFrameTex,roughness:0.7}));pLeg.position.set(cx,0.4,cz+1);scene.add(pLeg);const pBase=new THREE.Mesh(new THREE.CylinderGeometry(1.0,1.0,0.1,64),new THREE.MeshStandardMaterial({map:leatherTex,roughness:0.8}));pBase.position.set(cx,0.05,cz+1);scene.add(pBase);const cardBackTex=createCardBackTexture();const cardBackMat=new THREE.MeshStandardMaterial({map:cardBackTex,roughness:0.8});const cardGeo=new THREE.BoxGeometry(0.2,0.01,0.3);const deck=new THREE.Mesh(new THREE.BoxGeometry(0.2,0.1,0.3),cardBackMat);deck.position.set(cx+0.6,0.9,cz+0.8);deck.rotation.y=Math.PI/5;scene.add(deck);const cardA_tex=createCardTexture('A♠','#000');const cardA_mat=[new THREE.MeshStandardMaterial({color:0xffffff}),new THREE.MeshStandardMaterial({color:0xffffff}),new THREE.MeshStandardMaterial({map:cardA_tex,roughness:0.8}),new THREE.MeshStandardMaterial({map:cardBackTex}),new THREE.MeshStandardMaterial({color:0xffffff}),new THREE.MeshStandardMaterial({color:0xffffff})];const c1=new THREE.Mesh(cardGeo,cardA_mat);c1.position.set(cx-0.1,0.86,cz+1.6);c1.rotation.y=0.1;scene.add(c1);const cardK_tex=createCardTexture('K♥','#d00');const cardK_mat=[new THREE.MeshStandardMaterial({color:0xffffff}),new THREE.MeshStandardMaterial({color:0xffffff}),new THREE.MeshStandardMaterial({map:cardK_tex,roughness:0.8}),new THREE.MeshStandardMaterial({map:cardBackTex}),new THREE.MeshStandardMaterial({color:0xffffff}),new THREE.MeshStandardMaterial({color:0xffffff})];const c2=new THREE.Mesh(cardGeo,cardK_mat);c2.position.set(cx+0.1,0.86,cz+1.65);c2.rotation.y=-0.15;scene.add(c2);const c3=new THREE.Mesh(cardGeo,cardBackMat);c3.position.set(cx-0.1,0.86,cz+0.4);scene.add(c3);const card7_tex=createCardTexture('7♣','#000');const card7_mat=[new THREE.MeshStandardMaterial({color:0xffffff}),new THREE.MeshStandardMaterial({color:0xffffff}),new THREE.MeshStandardMaterial({map:card7_tex,roughness:0.8}),new THREE.MeshStandardMaterial({map:cardBackTex}),new THREE.MeshStandardMaterial({color:0xffffff}),new THREE.MeshStandardMaterial({color:0xffffff})];const c4=new THREE.Mesh(cardGeo,card7_mat);c4.position.set(cx+0.1,0.86,cz+0.45);c4.rotation.y=0.2;scene.add(c4);}

function createHeartHandle(colorHex) {
    const x = 0, y = 0;
    const heartShape = new THREE.Shape();
    heartShape.moveTo( x + 5, y + 5 );
    heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
    heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
    heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
    heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
    heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
    heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );

    const extrudeSettings = { depth: 3, bevelEnabled: true, bevelSegments: 2, steps: 1, bevelSize: 1, bevelThickness: 1 };
    const geometry = new THREE.ExtrudeGeometry( heartShape, extrudeSettings );
    geometry.center();
    geometry.scale(0.005, 0.005, 0.005);
    
    geometry.rotateZ(Math.PI);
    geometry.rotateY(Math.PI / 2);

    const material = new THREE.MeshStandardMaterial( { color: colorHex, roughness: 0.3, metalness: 0.1 } );
    return new THREE.Mesh( geometry, material );
}

function buildKitchen(scene, cx, cz) {
    const kitchenGroup = new THREE.Group();
    
    kitchenGroup.position.set(cx - 5.9, 0, cz); 
    kitchenGroup.rotation.y = 0; 
    scene.add(kitchenGroup);

    const basePurpleMat = new THREE.MeshStandardMaterial({color: 0x5a3a6a, roughness: 0.8}); 
    const lightPurpleMat = new THREE.MeshStandardMaterial({color: 0x9B84B5, roughness: 0.5}); 
    const pinkHeartColor = 0xE583A6; 
    const counterTopMat = new THREE.MeshStandardMaterial({color: 0xe6e6fa, roughness: 0.2, metalness: 0.1}); 
    const darkOvenMat = new THREE.MeshStandardMaterial({color: 0x221133, roughness: 0.6, metalness: 0.4});
    const steelMat = new THREE.MeshStandardMaterial({color: 0xaaaaaa, roughness: 0.3, metalness: 0.8});
    const glassMat = new THREE.MeshStandardMaterial({color: 0x111122, roughness: 0.1, metalness: 0.9, transparent: true, opacity: 0.7});
    const fridgeInsideMat = new THREE.MeshStandardMaterial({color: 0xf0e6f5, roughness: 0.5});
    const toeKickMat = new THREE.MeshStandardMaterial({color: 0x1a1a1a, roughness: 0.9}); 

    function createCabinetDoor(width, height, mat) {
        const doorGroup = new THREE.Group();
        
        const base = new THREE.Mesh(new THREE.BoxGeometry(0.04, height, width), mat);
        doorGroup.add(base);
        
        const innerPanel = new THREE.Mesh(new THREE.BoxGeometry(0.01, height - 0.15, width - 0.15), new THREE.MeshStandardMaterial({color: 0x8a73a3, roughness: 0.6}));
        innerPanel.position.set(0.021, 0, 0); 
        doorGroup.add(innerPanel);
        return doorGroup;
    }

    const createLowerCabinet = (zPos) => {
        
        const toeKick = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.15, 1.2), toeKickMat);
        toeKick.position.set(0.5, 0.075, zPos);
        kitchenGroup.add(toeKick);

        const cabinetBase = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.85, 1.2), basePurpleMat);
        cabinetBase.position.set(0.55, 0.575, zPos);
        kitchenGroup.add(cabinetBase);

        const drawer = createCabinetDoor(1.15, 0.2, lightPurpleMat);
        drawer.position.set(1.12, 0.88, zPos);
        kitchenGroup.add(drawer);
        
        const h1 = createHeartHandle(pinkHeartColor);
        h1.position.set(1.16, 0.88, zPos);
        h1.scale.set(0.8, 0.8, 0.8); 
        kitchenGroup.add(h1);

        const door = createCabinetDoor(1.15, 0.6, lightPurpleMat);
        door.position.set(1.12, 0.45, zPos);
        kitchenGroup.add(door);

        const h2 = createHeartHandle(pinkHeartColor);
        h2.position.set(1.16, 0.6, zPos - 0.4);
        kitchenGroup.add(h2);
    };

    createLowerCabinet(-4.5);
    createLowerCabinet(-3.3);
    createLowerCabinet(-2.1);

    createLowerCabinet(0.3);
    createLowerCabinet(1.5);

    const counterTop = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.08, 7.3), counterTopMat);
    counterTop.position.set(0.65, 1.04, -1.5);
    kitchenGroup.add(counterTop);

    const backsplash = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.2, 7.3), counterTopMat);
    backsplash.position.set(0.025, 1.18, -1.5);
    kitchenGroup.add(backsplash);

    const createUpperCabinet = (zPos) => {
        const cabinetBase = new THREE.Mesh(new THREE.BoxGeometry(0.6, 1.2, 1.2), basePurpleMat);
        cabinetBase.position.set(0.3, 3.2, zPos);
        kitchenGroup.add(cabinetBase);

        const upperDoor = createCabinetDoor(1.15, 1.15, lightPurpleMat);
        upperDoor.position.set(0.62, 3.2, zPos);
        kitchenGroup.add(upperDoor);

        const uh = createHeartHandle(pinkHeartColor);
        uh.position.set(0.66, 2.8, zPos - 0.4);
        kitchenGroup.add(uh);
    };

    createUpperCabinet(-4.5);
    createUpperCabinet(-3.3);
    createUpperCabinet(-2.1);
    
    createUpperCabinet(0.3);
    createUpperCabinet(1.5);

    const oZ = -0.9;
    const fX = 0.55;

    const ot = 0.06;
    const obBk = new THREE.Mesh(new THREE.BoxGeometry(ot, 1.0, 1.2), darkOvenMat);
    obBk.position.set(fX - 0.55 + ot/2, 0.5, oZ); kitchenGroup.add(obBk);
    const obL = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.0, ot), darkOvenMat);
    obL.position.set(fX, 0.5, oZ - 0.6 + ot/2); kitchenGroup.add(obL);
    const obR = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.0, ot), darkOvenMat);
    obR.position.set(fX, 0.5, oZ + 0.6 - ot/2); kitchenGroup.add(obR);
    const obTop = new THREE.Mesh(new THREE.BoxGeometry(1.1, ot, 1.2), darkOvenMat);
    obTop.position.set(fX, 1.0 - ot/2, oZ); kitchenGroup.add(obTop);
    const obBot = new THREE.Mesh(new THREE.BoxGeometry(1.1, ot, 1.2), darkOvenMat);
    obBot.position.set(fX, ot/2, oZ); kitchenGroup.add(obBot);

    const ovenIM = new THREE.MeshBasicMaterial({color: 0x05020a, side: THREE.DoubleSide});
    
    const ovenBW = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 0.7), ovenIM);
    ovenBW.position.set(fX - 0.38, 0.45, oZ); ovenBW.rotation.y = Math.PI / 2;
    kitchenGroup.add(ovenBW);
    
    const ovenSL = new THREE.Mesh(new THREE.PlaneGeometry(0.75, 0.7), ovenIM);
    ovenSL.position.set(fX, 0.45, oZ - 0.52); ovenSL.rotation.y = 0;
    kitchenGroup.add(ovenSL);
    
    const ovenSR = new THREE.Mesh(new THREE.PlaneGeometry(0.75, 0.7), ovenIM);
    ovenSR.position.set(fX, 0.45, oZ + 0.52); ovenSR.rotation.y = Math.PI;
    kitchenGroup.add(ovenSR);
    
    const ovenCeil = new THREE.Mesh(new THREE.PlaneGeometry(0.75, 1.1), ovenIM);
    ovenCeil.position.set(fX, 0.78, oZ); ovenCeil.rotation.x = Math.PI / 2;
    kitchenGroup.add(ovenCeil);
    
    const ovenFlr = new THREE.Mesh(new THREE.PlaneGeometry(0.75, 1.1), ovenIM);
    ovenFlr.position.set(fX, 0.12, oZ); ovenFlr.rotation.x = -Math.PI / 2;
    kitchenGroup.add(ovenFlr);

    const oRack = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.02, 1.0), steelMat);
    oRack.position.set(fX + 0.1, 0.45, oZ);
    kitchenGroup.add(oRack);

    const oHeat = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.5), new THREE.MeshBasicMaterial({color: 0xff4400, transparent:true, opacity:0.8}));
    oHeat.position.set(0.15, 0.45, oZ);
    oHeat.rotation.y = Math.PI / 2;
    kitchenGroup.add(oHeat);

    const controlPanel = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.2, 1.2), steelMat);
    controlPanel.rotation.z = -Math.PI / 6;
    controlPanel.position.set(0.62, 1.08, oZ);
    kitchenGroup.add(controlPanel);

    const knobMat = new THREE.MeshStandardMaterial({color: pinkHeartColor, roughness: 0.2, metalness: 0.3});
    for(let z = -0.4; z <= 0.4; z += 0.25) {
        const knob = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.04, 16), knobMat);
        knob.rotation.z = Math.PI / 2 - Math.PI / 6;
        knob.position.set(0.68, 1.12, oZ + z);
        kitchenGroup.add(knob);
    }

    const stoveTop = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.02, 1.15), darkOvenMat);
    stoveTop.position.set(0.5, 1.05, oZ + 0.3);
    kitchenGroup.add(stoveTop);

    const burnerMat = new THREE.MeshStandardMaterial({color: 0x111111, roughness: 0.9});
    const burnerPositions = [[-0.1, 0.05], [-0.1, 0.55], [-0.45, 0.05], [-0.45, 0.55]];
    burnerPositions.forEach(pos => {
        const burner = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.02, 8, 24), burnerMat);
        burner.rotation.x = Math.PI / 2;
        burner.position.set(fX + pos[0], 1.065, oZ + pos[1]);
        kitchenGroup.add(burner);
    });

    window.ovenDoorHinge = new THREE.Group();
    
    window.ovenDoorHinge.position.set(1.1, 0.1, oZ); 
    kitchenGroup.add(window.ovenDoorHinge);

    const ovenDoorFrame = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.7, 1.2), darkOvenMat);
    ovenDoorFrame.position.set(0.025, 0.35, 0); 
    ovenDoorFrame.userData = {type: 'TOGGLE_OVEN'};
    window.ovenDoorHinge.add(ovenDoorFrame);
    objects.push(ovenDoorFrame);

    const ovenGlass = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.5, 0.9), glassMat);
    ovenGlass.position.set(0.025, 0.35, 0);
    ovenGlass.userData = {type: 'TOGGLE_OVEN'};
    window.ovenDoorHinge.add(ovenGlass);
    objects.push(ovenGlass);

    const oHandle = createHeartHandle(pinkHeartColor);
    oHandle.position.set(0.08, 0.6, 0);
    window.ovenDoorHinge.add(oHandle);

    const hoodGroup = new THREE.Group();
    hoodGroup.position.set(0.6, 2.0, oZ);
    kitchenGroup.add(hoodGroup);

    const hoodMain = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.2, 1.2), steelMat);
    hoodGroup.add(hoodMain);

    const hoodSlant = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.8, 0.6, 4), steelMat);
    hoodSlant.rotation.y = Math.PI / 4;
    hoodSlant.position.set(-0.2, 0.4, 0);
    hoodGroup.add(hoodSlant);

    const hoodPipe = new THREE.Mesh(new THREE.BoxGeometry(0.4, 1.8, 0.4), steelMat);
    hoodPipe.position.set(-0.2, 1.6, 0);
    hoodGroup.add(hoodPipe);

    const fZ = 3.3; 
    const frX = 0.6; 

    const t = 0.06; 
    
    const fbBack = new THREE.Mesh(new THREE.BoxGeometry(t, 4.0, 1.8), basePurpleMat);
    fbBack.position.set(frX - 0.6 + t/2, 2.0, fZ); kitchenGroup.add(fbBack);
    
    const fbLeft = new THREE.Mesh(new THREE.BoxGeometry(1.2, 4.0, t), basePurpleMat);
    fbLeft.position.set(frX, 2.0, fZ - 0.9 + t/2); kitchenGroup.add(fbLeft);
    
    const fbRight = new THREE.Mesh(new THREE.BoxGeometry(1.2, 4.0, t), basePurpleMat);
    fbRight.position.set(frX, 2.0, fZ + 0.9 - t/2); kitchenGroup.add(fbRight);
    
    const fbTop = new THREE.Mesh(new THREE.BoxGeometry(1.2, t, 1.8), basePurpleMat);
    fbTop.position.set(frX, 4.0 - t/2, fZ); kitchenGroup.add(fbTop);
    
    const fbBot = new THREE.Mesh(new THREE.BoxGeometry(1.2, t, 1.8), basePurpleMat);
    fbBot.position.set(frX, t/2, fZ); kitchenGroup.add(fbBot);

    const fridgeIM = new THREE.MeshStandardMaterial({color: 0xf0e6f5, roughness: 0.5, side: THREE.FrontSide});
    const fbiBk = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 4.0), fridgeIM);
    fbiBk.position.set(frX - 0.6 + t + 0.01, 2.0, fZ); fbiBk.rotation.y = Math.PI / 2; kitchenGroup.add(fbiBk);
    const fbiL = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 4.0), fridgeIM);
    fbiL.position.set(frX, 2.0, fZ - 0.9 + t + 0.01); fbiL.rotation.y = 0; kitchenGroup.add(fbiL);
    const fbiR = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 4.0), fridgeIM);
    fbiR.position.set(frX, 2.0, fZ + 0.9 - t - 0.01); fbiR.rotation.y = Math.PI; kitchenGroup.add(fbiR);
    const fbiTop = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 1.8), fridgeIM);
    fbiTop.position.set(frX, 4.0 - t - 0.01, fZ); fbiTop.rotation.x = Math.PI / 2; kitchenGroup.add(fbiTop);
    const fbiBot = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 1.8), fridgeIM);
    fbiBot.position.set(frX, t + 0.01, fZ); fbiBot.rotation.x = -Math.PI / 2; kitchenGroup.add(fbiBot);

    const shelfMat = new THREE.MeshStandardMaterial({color: 0xddffff, transparent: true, opacity: 0.6, roughness: 0.1});
    for(let y = 0.8; y <= 3.2; y += 0.8) {
        const fShelf = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.02, 1.5), shelfMat);
        fShelf.position.set(frX + 0.1, y, fZ);
        kitchenGroup.add(fShelf);

        const shelfGuard = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.05, 1.5), new THREE.MeshStandardMaterial({color: 0xffffff}));
        shelfGuard.position.set(frX + 0.6, y + 0.025, fZ);
        kitchenGroup.add(shelfGuard);
    }

    const cake = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.2, 32), new THREE.MeshStandardMaterial({color: 0xff66b2, roughness: 0.9}));
    cake.position.set(frX, 0.9, fZ + 0.2);
    kitchenGroup.add(cake);
    const cherry = new THREE.Mesh(new THREE.SphereGeometry(0.04, 16, 16), new THREE.MeshStandardMaterial({color: 0xff0000}));
    cherry.position.set(frX, 1.02, fZ + 0.2);
    kitchenGroup.add(cherry);

    const juice = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.4, 0.2), new THREE.MeshStandardMaterial({color: 0xffaa00}));
    juice.position.set(frX + 0.2, 1.8, fZ - 0.4);
    kitchenGroup.add(juice);

    const milk = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.35, 16), new THREE.MeshStandardMaterial({color: 0xffffff}));
    milk.position.set(frX + 0.3, 1.77, fZ + 0.5);
    kitchenGroup.add(milk);

    const canMat = new THREE.MeshStandardMaterial({color: 0x00aaff, metalness: 0.8});
    for(let i=0; i<3; i++) {
        const soda = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.15, 16), canMat);
        soda.position.set(frX + 0.1, 2.47, fZ - 0.3 + (i * 0.15));
        kitchenGroup.add(soda);
    }

    window.fridgeDoorHinge = new THREE.Group();
    
    window.fridgeDoorHinge.position.set(frX + 0.6, 2.0, fZ - 0.9); 
    kitchenGroup.add(window.fridgeDoorHinge);

    const fridgeDoor = new THREE.Mesh(new THREE.BoxGeometry(0.1, 4.0, 1.8), lightPurpleMat);
    fridgeDoor.position.set(0.05, 0, 0.9); 
    fridgeDoor.userData = {type: 'TOGGLE_FRIDGE'};
    window.fridgeDoorHinge.add(fridgeDoor);
    objects.push(fridgeDoor);

    const doorSeal = new THREE.Mesh(new THREE.BoxGeometry(0.02, 3.9, 1.7), new THREE.MeshStandardMaterial({color: 0xffffff, roughness: 0.8}));
    doorSeal.position.set(-0.01, 0, 0.9);
    window.fridgeDoorHinge.add(doorSeal);

    const fHandle = createHeartHandle(pinkHeartColor);
    fHandle.position.set(0.12, -0.2, 1.6);
    fHandle.scale.set(1.5, 1.5, 1.5); 
    window.fridgeDoorHinge.add(fHandle);
}

function buildChillRoom(){
    const cx=0,cz=100;
    initChillWallBase();
    const floorTex=createFloorTexture('#ffb3c6','#ffc2d1');
    const ceilTex=createCeilingTexture();
    const floorMat=new THREE.MeshStandardMaterial({map:floorTex,roughness:0.8});
    const light=new THREE.PointLight(0xffffff,1.2,30);
    light.position.set(cx,4.0,cz);
    scene.add(light);
    addCeilingLamp(scene,cx,4.45,cz);
    
    const floor=new THREE.Mesh(new THREE.PlaneGeometry(12,12),floorMat);
    floor.rotation.x=-Math.PI/2;
    floor.position.set(cx,0,cz);
    scene.add(floor);
    
    const ceil=new THREE.Mesh(new THREE.PlaneGeometry(12,12),new THREE.MeshStandardMaterial({map:ceilTex,roughness:0.9}));
    ceil.rotation.x=Math.PI/2;
    ceil.position.set(cx,4.5,cz);
    scene.add(ceil);
    
    const wGeo=new THREE.PlaneGeometry(12,4.5);
    const wallTransforms=[{x:cx,z:cz-6,ry:0},{x:cx,z:cz+6,ry:Math.PI},{x:cx-6,z:cz,ry:Math.PI/2},{x:cx+6,z:cz,ry:-Math.PI/2}];
    wallTransforms.forEach(wt=>{
        const c=document.createElement('canvas');c.width=2048;c.height=2048;
        const cCtx=c.getContext('2d');cCtx.drawImage(chillWallBaseCanvas,0,0);
        const tex=new THREE.CanvasTexture(c);
        const mat=new THREE.MeshStandardMaterial({map:tex,side:THREE.DoubleSide,roughness:0.6});
        const w=new THREE.Mesh(wGeo,mat);
        w.position.set(wt.x,2.25,wt.z);w.rotation.y=wt.ry;w.userData={type:'PAINTABLE_WALL',ctx:cCtx,tex:tex};
        scene.add(w);objects.push(w);chillWalls.push(w);
    });
    
    const rbTex=createRainbowTexture();
    const rbMat=new THREE.MeshBasicMaterial({map:rbTex,transparent:true,side:THREE.DoubleSide});
    const rainbowPlane=new THREE.Mesh(new THREE.PlaneGeometry(6,3),rbMat);
    rainbowPlane.position.set(cx,3.0,cz+5.9);rainbowPlane.rotation.y=Math.PI;scene.add(rainbowPlane);
    
    const chillDoorTex=createPinkPatternDoor();
    const exitDoor=new THREE.Mesh(new THREE.BoxGeometry(2.0,3.2,0.15),new THREE.MeshStandardMaterial({map:chillDoorTex,roughness:0.5}));
    exitDoor.position.set(cx,1.6,cz-5.85);exitDoor.scale.x=-1;exitDoor.userData={type:'GO_TO_CORRIDOR'};
    scene.add(exitDoor);objects.push(exitDoor);addKnob(exitDoor,false);

    const bearX=cx+4.5;
    const bearZ=cz-4.5;
    
    const bearTable=new THREE.Group();
    bearTable.position.set(bearX,0,bearZ);
    scene.add(bearTable);
    
    const btLeg=new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.05,0.8,16),new THREE.MeshStandardMaterial({color:0xffffff}));
    btLeg.position.y=0.4;
    bearTable.add(btLeg);
    
    const btTop=new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,0.05,32),new THREE.MeshStandardMaterial({color:0xffccdd}));
    btTop.position.y=0.8;
    bearTable.add(btTop);

    const bearGroup=new THREE.Group();
    bearGroup.position.set(bearX,0.85,bearZ);
    bearGroup.rotation.y=-Math.PI/3;
    scene.add(bearGroup);

    const bMainMat=new THREE.MeshStandardMaterial({color:0xff99bb,roughness:0.9});
    const bLightMat=new THREE.MeshStandardMaterial({color:0xffe6f0,roughness:0.8});
    const bDarkMat=new THREE.MeshStandardMaterial({color:0x111111,roughness:0.4,metalness:0.2});
    const bowMat=new THREE.MeshStandardMaterial({color:0xff3366,roughness:0.6});

    const bodyGeo=new THREE.SphereGeometry(0.18,32,32);
    bodyGeo.scale(1,1.2,1);
    const bearBody=new THREE.Mesh(bodyGeo,bMainMat);
    bearBody.position.y=0.18;
    bearBody.userData={type:'CLICK_TEDDY'};
    bearGroup.add(bearBody);
    objects.push(bearBody);

    const belly=new THREE.Mesh(new THREE.SphereGeometry(0.14,32,32),bLightMat);
    belly.scale.set(1,1.2,0.5);
    belly.position.set(0,0.16,0.11);
    bearGroup.add(belly);

    const bearHead=new THREE.Mesh(new THREE.SphereGeometry(0.15,32,32),bMainMat);
    bearHead.position.set(0,0.45,0);
    bearHead.userData={type:'CLICK_TEDDY'};
    bearGroup.add(bearHead);
    objects.push(bearHead);

    const earGeo=new THREE.SphereGeometry(0.05,16,16);
    const inEarGeo=new THREE.SphereGeometry(0.03,16,16);
    inEarGeo.scale(1,1,0.3);
    
    const earL=new THREE.Mesh(earGeo,bMainMat);
    earL.position.set(-0.11,0.56,-0.02);
    bearGroup.add(earL);
    const inEarL=new THREE.Mesh(inEarGeo,bLightMat);
    inEarL.position.set(-0.11,0.56,0.02);
    bearGroup.add(inEarL);
    
    const earR=new THREE.Mesh(earGeo,bMainMat);
    earR.position.set(0.11,0.56,-0.02);
    bearGroup.add(earR);
    const inEarR=new THREE.Mesh(inEarGeo,bLightMat);
    inEarR.position.set(0.11,0.56,0.02);
    bearGroup.add(inEarR);

    const snout=new THREE.Mesh(new THREE.SphereGeometry(0.06,32,32),bLightMat);
    snout.scale.set(1.2,0.8,1);
    snout.position.set(0,0.40,0.13);
    bearGroup.add(snout);

    const nose=new THREE.Mesh(new THREE.SphereGeometry(0.02,16,16),bDarkMat);
    nose.position.set(0,0.43,0.185);
    nose.scale.set(1.2,0.8,1);
    bearGroup.add(nose);

    const eyeGeo=new THREE.SphereGeometry(0.015,16,16);
    const eyeL=new THREE.Mesh(eyeGeo,bDarkMat);
    eyeL.position.set(-0.06,0.48,0.12);
    bearGroup.add(eyeL);
    const eyeR=new THREE.Mesh(eyeGeo,bDarkMat);
    eyeR.position.set(0.06,0.48,0.12);
    bearGroup.add(eyeR);

    const mouthGeo=new THREE.TorusGeometry(0.02,0.004,8,16,Math.PI);
    const mouth=new THREE.Mesh(mouthGeo,bDarkMat);
    mouth.position.set(0,0.38,0.18);
    mouth.rotation.z=Math.PI;
    bearGroup.add(mouth);

    const armGeo = new THREE.SphereGeometry(0.04, 16, 16);
    armGeo.scale(1, 2.5, 1);
    
    const armL=new THREE.Mesh(armGeo,bMainMat);
    armL.position.set(-0.16,0.25,0.05);
    armL.rotation.z=Math.PI/4;
    armL.rotation.x=Math.PI/6;
    bearGroup.add(armL);
    
    const armR=new THREE.Mesh(armGeo,bMainMat);
    armR.position.set(0.16,0.25,0.05);
    armR.rotation.z=-Math.PI/4;
    armR.rotation.x=Math.PI/6;
    bearGroup.add(armR);

    const legGeo = new THREE.SphereGeometry(0.05, 16, 16);
    legGeo.scale(1, 2.0, 1);
    
    const legL=new THREE.Mesh(legGeo,bMainMat);
    legL.position.set(-0.12,0.08,0.12);
    legL.rotation.x=Math.PI/2.2;
    legL.rotation.z=-Math.PI/8;
    bearGroup.add(legL);
    
    const legR=new THREE.Mesh(legGeo,bMainMat);
    legR.position.set(0.12,0.08,0.12);
    legR.rotation.x=Math.PI/2.2;
    legR.rotation.z=Math.PI/8;
    bearGroup.add(legR);

    const bowL=new THREE.Mesh(new THREE.ConeGeometry(0.04,0.06,16),bowMat);
    bowL.position.set(-0.03,0.32,0.16);
    bowL.rotation.z=Math.PI/2;
    bearGroup.add(bowL);
    
    const bowR=new THREE.Mesh(new THREE.ConeGeometry(0.04,0.06,16),bowMat);
    bowR.position.set(0.03,0.32,0.16);
    bowR.rotation.z=-Math.PI/2;
    bearGroup.add(bowR);
    
    const bowC=new THREE.Mesh(new THREE.SphereGeometry(0.015,16,16),bowMat);
    bowC.position.set(0,0.32,0.17);
    bearGroup.add(bowC);

    // --- Duvar İzi ---
    const duvarIziMat = new THREE.MeshStandardMaterial({ transparent: true, roughness: 0.9, color: 0xeeeeee });
    new THREE.TextureLoader().load('code/duvarizi.png', function(tex) {
        duvarIziMat.map = tex;
        duvarIziMat.needsUpdate = true;
    });
    const duvarIziMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.4), duvarIziMat);
    duvarIziMesh.position.set(cx + 5.98, 1.3, cz - 4.5);
    duvarIziMesh.rotation.y = -Math.PI / 2;
    scene.add(duvarIziMesh);

    drawCanvas=document.createElement('canvas');
    drawCanvas.width=512;
    drawCanvas.height=128;
    drawCtx=drawCanvas.getContext('2d');
    drawPalette();
    drawTexture=new THREE.CanvasTexture(drawCanvas);
    
    const drawBoard=new THREE.Mesh(new THREE.PlaneGeometry(1.5,0.375),new THREE.MeshBasicMaterial({map:drawTexture}));
    drawBoard.position.set(cx+5.4,1.2,cz);
    drawBoard.rotation.set(-Math.PI/6,-Math.PI/2,0,'YXZ');
    drawBoard.userData={type:'COLOR_PALETTE'};
    scene.add(drawBoard);
    objects.push(drawBoard);
    
    const easelStand=new THREE.Mesh(new THREE.CylinderGeometry(0.1,0.1,1.5),new THREE.MeshStandardMaterial({color:0x885533}));
    easelStand.position.set(cx+5.6,0.6,cz);
    scene.add(easelStand);
    
    // --- Mekanik Kol (Silme Tuşu) ---
    const leverGroup = new THREE.Group();
    leverGroup.position.set(cx+5.9, 1.5, cz+1.0);
    leverGroup.rotation.y = -Math.PI/2;
    scene.add(leverGroup);

    // Kol tabanı (duvardan çıkan plaka)
    const leverBaseMat = new THREE.MeshStandardMaterial({color:0x555566, roughness:0.4, metalness:0.7});
    const leverBase = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.25, 0.25), leverBaseMat);
    leverBase.position.set(0, 0, 0);
    leverGroup.add(leverBase);

    // Menteşe (sarı halka)
    const hingeMat = new THREE.MeshStandardMaterial({color:0xd4af37, metalness:0.9, roughness:0.2});
    const hinge = new THREE.Mesh(new THREE.TorusGeometry(0.055, 0.02, 16, 32), hingeMat);
    hinge.rotation.y = Math.PI/2;
    hinge.position.set(0.05, 0.08, 0);
    leverGroup.add(hinge);

    // Kol pivot grubu (bu döner)
    window.leverPivot = new THREE.Group();
    window.leverPivot.position.set(0.05, 0.08, 0);
    leverGroup.add(window.leverPivot);

    // Kol çubuğu
    const rodMat = new THREE.MeshStandardMaterial({color:0xcc2244, roughness:0.3, metalness:0.6});
    const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.45, 16), rodMat);
    rod.position.set(0, 0.225, 0);
    window.leverPivot.add(rod);

    // Kol topu (tutacak)
    const ballMat = new THREE.MeshStandardMaterial({color:0xff3366, roughness:0.2, metalness:0.1});
    const ball = new THREE.Mesh(new THREE.SphereGeometry(0.06, 32, 32), ballMat);
    ball.position.set(0, 0.47, 0);
    window.leverPivot.add(ball);

    // Etiket plakası
    const plateMat = new THREE.MeshStandardMaterial({color:0xeeeecc, roughness:0.5});
    const plate = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.12, 0.22), plateMat);
    plate.position.set(0.04, -0.08, 0);
    leverGroup.add(plate);

    // Tıklama hedefi — kol topu ile hizalı, leverPivot üzerinde
    const clrBtn = new THREE.Mesh(
        new THREE.SphereGeometry(0.09, 16, 16),
        new THREE.MeshStandardMaterial({color:0xff3366, transparent:true, opacity:0.0})
    );
    clrBtn.position.set(0, 0.47, 0);
    window.leverPivot.add(clrBtn);
    // Dünya konumu hesaplamak için referans tutalım
    window.leverPivot.userData = {type:'BTN_CLEAR_DRAW', originalZ: cz+1.0, isPressed:false};
    clrBtn.userData = {type:'BTN_CLEAR_DRAW', originalZ: cz+1.0, isPressed:false};
    scene.add(leverGroup);
    objects.push(clrBtn);

    const tableGroup=new THREE.Group();
    tableGroup.position.set(cx,0,cz);
    scene.add(tableGroup);
    
    const leg=new THREE.Mesh(new THREE.CylinderGeometry(0.4,0.8,0.9,32),new THREE.MeshStandardMaterial({color:'#ff9999',roughness:0.6}));
    leg.position.y=0.45;
    tableGroup.add(leg);
    
    const wheelTex=createRouletteTexture(chillGames,true);
    const wheelMats=[
        new THREE.MeshStandardMaterial({color:'#ff66b2',roughness:0.5}),
        new THREE.MeshStandardMaterial({map:wheelTex,roughness:0.9}),
        new THREE.MeshStandardMaterial({color:'#ffcc99',roughness:0.8})
    ];
    chillWheelMesh=new THREE.Mesh(new THREE.CylinderGeometry(2.2,2.2,0.2,128),wheelMats);
    chillWheelMesh.position.y=1.0;
    chillWheelMesh.userData={type:'WHEEL_CHILL'};
    tableGroup.add(chillWheelMesh);
    objects.push(chillWheelMesh);
    
    smileyGroup=new THREE.Group();
    smileyGroup.position.set(0,1.1,0);
    tableGroup.add(smileyGroup);
    
    const smTex=createSmileyTexture();
    const smileyMesh=new THREE.Mesh(new THREE.SphereGeometry(0.48,64,64),new THREE.MeshStandardMaterial({map:smTex,roughness:0.4,metalness:0.1}));
    smileyMesh.rotation.y=-Math.PI/2;
    smileyGroup.add(smileyMesh);
    
    const cJumbotronMats=[
        new THREE.MeshBasicMaterial({map:chillScreenTex}),
        new THREE.MeshBasicMaterial({map:chillScreenTex}),
        new THREE.MeshStandardMaterial({color:0xff9999}),
        new THREE.MeshStandardMaterial({color:0xff9999}),
        new THREE.MeshBasicMaterial({map:chillScreenTex}),
        new THREE.MeshBasicMaterial({map:chillScreenTex})
    ];
    const chillJumbo=new THREE.Mesh(new THREE.BoxGeometry(1.5,0.8,1.5),cJumbotronMats);
    chillJumbo.position.set(cx,3.2,cz);
    scene.add(chillJumbo);
    
    const cPole=new THREE.Mesh(new THREE.CylinderGeometry(0.08,0.08,1.3,32),new THREE.MeshStandardMaterial({color:0xffb3c6}));
    cPole.position.set(cx,3.85,cz);
    scene.add(cPole);
    
    chillScreens=[cJumbotronMats[0],cJumbotronMats[1],cJumbotronMats[4],cJumbotronMats[5]];

    buildKitchen(scene, cx, cz);
}
