import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
const scene = new THREE.Scene();

scene.background = new THREE.CubeTextureLoader()
	.setPath("textures/env/")
	.load(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]);

const aspect = {
	width: window.innerWidth,
	height: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(
	75,
	aspect.width / aspect.height,
	0.01,
	1000
);

camera.position.z = 2;
scene.add(camera);

const canvas = document.querySelector(".draw");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(aspect.width, aspect.height);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enableRotate = true;

const animate = () => {
	controls.update();
	renderer.render(scene, camera);
	requestAnimationFrame(animate);
};

animate();
