console.log('Lesson 26');

let arr = [1, 2, 3];
let arr2 = new Array(1, 2, 3);

let num = new Number(2);
let str = new String('abc');
let str2 = 'abc';

console.log(arr.push(4));
console.log(arr.concat(arr2));
console.log(arr.filter((element) => {
    return element < 3;
}));

console.log(arr2);
console.dir(arr2);
console.log(str);
console.dir(str2);
console.log(num);
console.dir(num);

function cityList() {
    return ['London', 'Madrid', 'Paris']
}
let cities = cityList();
console.log(cities);


let cities2;
function cityList2() {
    cities2 = ['London', 'Madrid', 'Paris']
}
cityList2();
console.log(cities2);


function User(name, admin, age) {
    this.name = name;
    this.isAdmin = admin;
    if (age) {
        this.age = age;
    }
    if (age < 18) {
        this.isChild = true;
        this.momName = 'Mom';
        this.callMom = function() {
            console.log(this.momName + ' come here!!')
        }
    }
    // this.sayHi = function() {
    //     console.log('My name is ' + this.name);
    // };
    
    // console.log(this);
}
User.prototype.sayHi = function() {
    console.log('My name is ' + this.name);
};


const user = new User('Harry', false, 40);
const user2 = new User('Bill', false);
const user3 = new User('John', true, 17);

console.log(user);
console.log(user2);
console.log(user3);

user2.sayHi();
user3.sayHi();
user3.callMom();

console.log("________________________________");

function greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
}

let person = {
    name: 'Tommy',
    age: 25,
};
let person2 = {
    name: 'Ostap',
    age: 21,
};
greet.call(person);
greet.apply(person2);

let greetPerson = greet.bind(person);
greetPerson();



function Transport(name, wheels) {
    this.countOfWheels = wheels;
    this.name = name;
}

Transport.prototype.drive = function() {
    console.log(`${this.name} is driving`);
}

function Bike(name, wheels, speeds) {
    Transport.call(this, name, wheels);
    this.speeds = speeds;
}

function Car(name, wheels, passangers) {
    Transport.call(this, name, wheels);
    this.passangers = passangers;
}

Bike.prototype = Transport.prototype;
Car.prototype = Transport.prototype;

let bikeUkraine = new Bike('bike', 2, 45);
let bikeEurope = new Bike('bike2', 2, 50);
let carEurope = new Car('car', 4, 4);

bikeUkraine.drive();
carEurope.drive();

console.log(bikeUkraine);
console.log(bikeEurope);
console.log(carEurope);