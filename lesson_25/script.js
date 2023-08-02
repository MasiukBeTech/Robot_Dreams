console.log('Lesson 25');


let john = {
    name: 'John',
    age: 30,
    adress: {
        street: 'Shevchenka street',
        houseNumber: '45',
        zipCode: '458-78',
        printStreet: function () {
            console.log(this.street);
        },
    },
    hobbies: ['Football', 'Reading', 'Tenis'],
    isStudent: true,
    university: {
    name: "Oxford",
    course: 3,
    },
    greet: function() {
        console.log('Hello, I am '+ this.name);
    }
};
let bill = {
    name: 'Bill',
    age: 30,
    adress: {
        street: 'Shevchenka street',
        houseNumber: '45',
        zipCode: '458-78'
    },
    hobbies: ['Football', 'Reading', 'Tenis'],
    isStudent: false,
    university: null,
    greet: function() {
        console.log('Hello, I am '+ this.name);
    }
};

let keyName = 'name';

console.log(john.name);
console.log(john.age);
console.log(john.university.name);
 
if (bill.university && bill.university.name) {
    console.log(bill.university.name);
}

john.age = 35;
console.log(john.age);
console.log(john['name']);
console.log(john[keyName]);
console.log(john.adress.street);

john.greet();
bill.greet();
john.adress.printStreet();

console.log('name' in john); // виведе true
console.log('country' in john); // виведе false

for(let key in john) {
    console.log(key);
    console.log(john[key]);
    if (key === "adress") {
        for (const adressKey in john["adress"]) {
          console.log(john["adress"][adressKey]);
        }
    }
    if (key === "hobbies") {
        for (const hobbie of john["hobbies"]) {
          console.log(hobbie);
        }
    }
}
console.log('__________________________');

let a = {
    x: 1,
    y: 2,
    test: {
        x: 1,
        y: 2
    }
};
a.test = null;

let b = a;

let c = {
    x: 1,
    y: 2
};

// let d = Object.assign({}, a);
let d = {...a};

b.z = 3;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

console.log(a === b);
console.log(a === c);


let array = [1, 2, 3];
let array2 = array;
 
let array3 = [...array];
// let array3 = array.slice();

array.push(4);

console.log(array);
console.log(array2);
console.log(array3);
console.log(array2 === array2); // true
console.log([1, 2, 3] === [1, 2, 3]); // false

console.log('_________________________');

console.log(window);

// alert('Hi');
// window.alert("Hi!!!");

let user = { name: "Іван" };
let admin = { name: "Адмін" };
function sayHi() {
  console.log(this.name);
}
// використовуємо одну і ту ж функцію у двох об’єктах
user.greet = sayHi;
admin.greet = sayHi;
// виклики функцій, приведені нижче, мають різні this
// "this" всередині функції являється посиланням на об’єкт "перед крапкою"
user.greet(); // Іван (this == user)
admin.greet(); // Адмін (this == admin)
admin["greet"]();
