class Enemys{
    constructor(name, speed, health, attack, defend){
        this.name = name;
        this.speed = 2;
        this.health = 5;
        this.attackPower = 100;
        this.defend = 2;
    }

    attack() {
        console.log(`${this.name} attack!, attack = ${this.attackPower}`);
    }

    walk() {
        console.log(`${this.name} walk, speed = ${this.speed}`);
    }

    dash() {
        console.log(`${this.name} dash, speed = ${this.speed + 3}`);
    }

    getInformation() {
        console.log(`${this.name} memiliki speed = ${this.speed}, attack = ${this.attackPower}, health = ${this.health}, 
        dan defend = ${this.defend}`);
    }
}

let enemy = new Enemys("Lex Luthor");
enemy.attack();
enemy.walk();
enemy.dash();
enemy.getInformation();