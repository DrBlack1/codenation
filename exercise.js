const person = {
    firstName: 'top',
    lastName: 'cat',
    age: 32,
    gender: 'male',

    sayHi(){
        console.log(`Hello my name is ${this.firstName} ${this.lastName}`)
    }
}
person.sayHi();

const rabbit = {
    name: 'chewey',
    colour: 'white',
    eartype: 'high',

    bunHop(){
        console.log(`I can jump`)
    },
    bunChew(){
        console.log(`Im hungry`)
    }
}
rabbit.bunHop();
rabbit.bunChew();