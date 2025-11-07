import * as THREE from 'three'
import Experience from '../Experience.js'
import Floor from './Floor.js'
import Fox from './Fox.js'
import Environment from './Environment.js' 

export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        
        this.resources.on('ready', () =>
        {
            this.floor = new Floor()
            this.fox = new Fox()
            this.environment = new Environment()
        }
        )
        /** 
        const testMesh = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshStandardMaterial()
        )
        this.scene.add(testMesh)
        */
        
        //this.environment = new Environment()
    }

    update()
    {
        if(this.fox)
            this.fox.update()
    }
}