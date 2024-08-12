// Inisialisasi Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('3d-container').appendChild(renderer.domElement);

// Kontrol Orbit untuk memutar model 3D
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Tambahkan model 3D
const loader = new THREE.GLTFLoader();
loader.load('model-surabi.glb', function(gltf) {
    scene.add(gltf.scene);
    gltf.scene.scale.set(1, 1, 1);
    gltf.scene.position.set(0, 0, 0);
});

// Posisi kamera
camera.position.z = 5;

// Fungsi render loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

animate();