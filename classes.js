class Dinosaur {
    constructor(){
        this.health = 100
        this.attention = 50
    }
    get stats() {
        return console.table(this)
    }
}
export class Trex extends Dinosaur {
    constructor(){
        super()
        this.strength = 100
        this.attack = 50
        this.energy = 30
        this.speed = 1
    }
}
export class Raptor extends Dinosaur {
    constructor(){
        super()
        this.strength = 30
        this.attack = 5
        this.energy = 60
        this.speed = 2
    }
}
