// workaround for chrome bug: http://code.google.com/p/chromium/issues/detail?id=35980#c12
if ( window.innerWidth === 0 ) { window.innerWidth = parent.innerWidth; window.innerHeight = parent.innerHeight; }

var camera, scene;
var geometry, material;
var mesh = [];
var renderer;

window.onload = function() {
    init();
    animate();
}
function init() {
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.z = 500;

    scene = new THREE.Scene();

    for(var i=0; i<1; i++){
        //var j=i+1;
        geometry = new THREE.CubeGeometry( 20, 20, 20 );
        material = new THREE.MeshBasicMaterial( { color: 0xFF0000, wireframe: true, wireframeLinewidth: 2 } );

        mesh.push(new THREE.Mesh( geometry, material ));
        scene.add( mesh[i] );
    }
//add items to the scene
    renderer = new THREE.CanvasRenderer();
    renderer.setSize( document.width-100, document.height-100);

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
    for(var i in mesh) {
        mesh[i].rotation.x += 0.06;
        mesh[i].rotation.y += 0.02;

        if(ypos==400) ydir = -1;
        if(ypos==-400) ydir = 1;
        ypos += ydir;

        if(zpos==100) zdir = -1;
        if(zpos==-100) zdir = 1;
        zpos += zdir;

        if(xpos==400) xdir = -1;
        if(xpos==-400) xdir = 1;
        xpos += xdir;

        mesh[i].position = new THREE.Vector3(10*(i+1)+xpos,ypos,zpos);
    }
    renderer.render( scene, camera );
}

