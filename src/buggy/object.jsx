import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useEffect, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import BuggyGLB from "./Buggy.glb";

function Object() {
  const refContainer = useRef(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    const canvas = renderer.domElement;
    refContainer.current && refContainer.current.appendChild(canvas);
    scene.background = new THREE.Color(0xf4f6f6);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    loader.load(
      BuggyGLB,

      function (gltf) {
        const object = gltf.scene;
        scene.add(object);
        camera.position.z = 2;
        const controls = new OrbitControls(camera, canvas);
        controls.update();

        const animate = function () {
          requestAnimationFrame(animate);
          object.position.x = 3;
          object.position.y = -7;
          object.position.z = -10;
          controls.update();
          renderer.render(scene, camera);
        };

        animate();
      },

      undefined,
      function (error) {
        console.error(error);
      }
    );
  }, []);

  return (
    <>
      <div ref={refContainer}></div>
    </>
  );
}

export default Object;
