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
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const canvas = refContainer.current; 

    const renderer = new THREE.WebGLRenderer({ canvas }); 
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    scene.background = new THREE.Color(0xf4f6f6); //f4f6f6
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.2);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    let object; 

    loader.load(
      BuggyGLB,

      function (gltf) {
        object = gltf.scene;
        scene.add(object);
        camera.position.z = 10;
       // const controls = new OrbitControls(camera, canvas);
      //  controls.update();

        const animate = function () {
          requestAnimationFrame(animate);
          object.position.x = 0;
          object.position.y = -2; 
          object.position.z = 0;
          object.rotation.y += 0.01;
     
     //     controls.update();
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
      <canvas ref={refContainer} ></canvas>
    </>
  );
}

export default Object;
