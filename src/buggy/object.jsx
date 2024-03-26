

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useEffect, useRef } from 'react';
import BuggyGLB from './Buggy.glb';

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

    refContainer.current &&
      refContainer.current.appendChild(renderer.domElement);

    // Changer la couleur du fond de la scène
    scene.background = new THREE.Color(0xabcdef); // Couleur hexadécimale

    // Ajout d'une lumière ambiante
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Couleur et intensité
    scene.add(ambientLight);

    // Ajout d'une lumière directionnelle
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); // Couleur et intensité
    directionalLight.position.set(1, 1, 1).normalize(); // Position de la lumière
    scene.add(directionalLight);

    // Chargez le fichier GLB
    loader.load(
      BuggyGLB,
      function (gltf) {
        const object = gltf.scene;
        scene.add(object);

        // Ajustez la position de la caméra pour voir l'objet
        camera.position.z = 2;

        // Fonction d'animation
        const animate = function () {
          requestAnimationFrame(animate);
          object.position.x = 3; 
          object.position.y = -5;
          object.position.z = -10;
          object.rotation.y += 0.01;
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

  return <div ref={refContainer}></div>;
}

export default Object;
