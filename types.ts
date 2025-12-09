import * as THREE from 'three';

export enum TreeMorphState {
  SCATTERED = 'SCATTERED',
  TREE_SHAPE = 'TREE_SHAPE'
}

export interface ParticleData {
  id: number;
  scatterPosition: THREE.Vector3;
  treePosition: THREE.Vector3;
  treeRotation: THREE.Euler;
  scale: number;
  color: string;
  type: 'LEAF' | 'ORNAMENT' | 'STAR';
}
