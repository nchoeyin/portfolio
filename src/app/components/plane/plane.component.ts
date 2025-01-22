import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import * as THREE from 'three';

// gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

@Component({
  selector: 'app-plane',
  standalone: true,
  imports: [],
  templateUrl: './plane.component.html',
  styleUrl: './plane.component.scss'
})
export class PlaneComponent implements AfterViewInit{

  private scene!: THREE.Scene;
  private renderer!: THREE.WebGLRenderer;
  private light!: THREE.PointLight;

  ngAfterViewInit() {
    this.initScene();
    this.loadModel();
  }

  private initScene() {
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    this.light = new THREE.PointLight(0xffffff, 0.75);
    this.light.position.set(70, -20, 150);
    this.scene.add(this.light, ambientLight);
  }

  private loadModel() {
    const loader = new THREE.Loader();
    loader.load('https://assets.codepen.io/557388/1405+Plane_1.obj', (object:any) => {
      object.traverse((child: THREE.Object3D) => {
        if ((child as THREE.Mesh).isMesh) {
          (child as THREE.Mesh).material = new THREE.MeshPhongMaterial({
            color: 0x171511,
            specular: 0xd0cbc7,
            shininess: 5,
          });
        }
      });
      this.scene.add(object);
      this.animateModel(object);
    });
  }

  private animateModel(object: THREE.Object3D) {
    const modelGroup = new THREE.Group();
    modelGroup.add(object);
    this.scene.add(modelGroup);

    gsap.timeline({
      scrollTrigger: {
        trigger: '.content',
        scrub: true,
        start: 'top top',
        end: 'bottom bottom',
      },
    }).to(modelGroup.position, { x: -50 });
  }
}








