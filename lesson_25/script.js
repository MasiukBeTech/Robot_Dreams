console.log('Lesson 25');

johnName = 'John';
johnAge = 30;
johnAddressStreet = 'Shevchenka street';
johnAddressHouseNumber = '45';

let john = {
    name: 'John',
    age: 30,
    adress: {
        street: 'Shevchenka street',
        houseNumber: '45',
        zipCode: '458-78'
    },
    hobbies: ['Football', 'Reading'],
    isStudent: true,
    greet: function() {
        console.log('Hello, I am John');
    }
};
let key = 'name';

console.log(john.name);
console.log(john['name']);
console.log(john[key]);

john.greet();