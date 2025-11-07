/**
 import Robot from './Robot.js'

export default class FlyingRobot extends Robot 
{
    sayHi()
    {
        super.sayHi()
        console.log('I am a flying robot')
    }

    constructor(name, legs)
    {
        super(name, legs)
        this.canFly = true
    }

    takeOff()
    {
        console.log(`Have a good flight ${this.name}`)
    }

    land()
    {
        console.log(`Welcome back ${this.name}`)
    }
}
*/