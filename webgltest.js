// workaround for chrome bug: http://code.google.com/p/chromium/issues/detail?id=35980#c12
if ( window.innerWidth === 0 ) { window.innerWidth = parent.innerWidth; window.innerHeight = parent.innerHeight; }

var camera, scene;
var geometry, material;
var mesh = [];
var renderer;
var count = 0;
objects = [];
window.onload = function() {
    init();
    animate();
}

window.onkeydown = function(e) {
    switch(e.keyCode){
        case 37:
            camera.position.x-=6;
            break;
        case 38:
            camera.position.y+=6;
            break;
        case 39:
            camera.position.x+=6;
            break;
        case 40:
            camera.position.y-=6;
            break;
    }
}

function init() {
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.z = 500;

    scene = new THREE.Scene();

    //add items to the scene
    renderer = new THREE.CanvasRenderer();
    renderer.setSize( window.innerWidth-20, window.innerHeight-20);

    document.body.appendChild( renderer.domElement );
}

var ypos = 0;
var ydir = 1;
var zpos = 0;
var zdir = 1;
var xpos = 0;
var xdir = 1;
var top = 100+window.innerHeight/2;
function animate() {
    requestAnimationFrame( animate );
    camera.position.z-=2;
 

    // if(count<10) {
        geometry1 = new THREE.CubeGeometry( 10, 10, 10 );
        material1 = new THREE.MeshBasicMaterial( { color: 0xFF0000, wireframe: true, wireframeLinewidth: 1 } );
        mesh1 = new THREE.Mesh( geometry1, material1 );
        mesh1.position = new THREE.Vector3(camera.position.x+myrand(200), camera.position.y+myrand(200), camera.position.z-300);
        scene.add(mesh1); 
        console.log('count:'+count)
        objects.push(mesh1);
        if(objects.length>400){
            scene.remove(objects.shift());
        }
    // }   
    renderer.render( scene, camera );


}

