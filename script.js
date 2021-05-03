class Ninja {
    constructor(name, health, strength = 3, speed = 3) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.speed = speed;
    }
    sayName() {
        console.log(`My Ninja name is ${this.name}`);
    }
    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Strength: ${this.strength}, Speed: ${this.speed}`);
    }
    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name, 200, 10, 10);
        this.wisdom = 10;
    }
    speakWisdom() {
        super.drinkSake();
        console.log(`What one programmer can do in one month, two programmers can do in two months.`)
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();