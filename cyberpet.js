class Bronson {
    constructor(type) {
        this.type = type;
        this.hunger = 20;
        this.thirst = 50;
        this.boredom = 100;
    }
    playWith() {
        this.thirst++;
        this.boredom--;
    }
    giveFood() {
        this.hunger--;
        this.boredom++;
    }
    giveWater() {
        this.thirst--;
        this.boredom++;
    }
}
const dog = new Bronson('dog');
dog.playWith();
console.log(dog);
dog.giveFood();
console.log(dog);
dog.giveWater();
console.log(dog);

class Butch {
    constructor(type) {
        this.type = type;
        this.hunger = 100;
        this.thirst = 50;
        this.boredom = 10;
    }
    playWith() {
        this.thirst++;
        this.boredom--;
    }
    giveFood() {
        this.hunger++;
        this.boredom--;
    }
    giveMilk() {
        this.thirst++;
        this.boredom--;
    }
}
const cat = new Butch('cat');
cat.playWith();
console.log(cat);
cat.giveFood();
console.log(cat);
cat.giveMilk();
console.log(cat);

class Jerry {
    constructor(type) {
        this.type = type;
        this.hunger = 50;
        this.thirst = 100;
        this.boredom = 10;
    }
    playWith() {
        this.thirst++;
        this.boredom--;
    }
    giveCheese() {
        this.hunger++;
        this.boredom--;
    }
    giveWater() {
        this.thirst++;
        this.boredom--;
    }
}
const mouse = new Jerry('mouse');
mouse.playWith();
console.log(mouse);
mouse.giveCheese();
console.log(mouse);
mouse.giveWater();
console.log(mouse);


// class Dog {
//     constructor(type){
//         this.type = type;
//         this.food = 50;
//         this.water = 50;
//         this.bord = 50;
//     }

//     playWith() {
//         this.water++;
//         this.bord--;
//     }

//     giveWater() {
//         this.water--;
//         this.bord++;
//     }

//     giveFood() {
//         this.food--;
//         this.bord++;
//     };

// }
// const dog1 = new Dog('dog1');
// dog1.playWith();
// console.log(dog1.playWith);
// dog1.giveWater();
// console.log(dog1.water);
// dog1.giveFood();
// console.log(dog1.giveFood);