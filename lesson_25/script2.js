let a = {
    x: 1,
    y: 2,
    test: {
        x: 1,
        y: 2
    }
};
console.log(a);

function isEmptyObject(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object' && !isEmptyObject(obj[key])) {
          return false;
        }
        return false;
      }
    }
    return true;
}
let b = {};

console.log(isEmptyObject(a)); // false
console.log(isEmptyObject(b)); // true


let user = {
    name: 'Ketty',
    age: 30,
    sayHello: function() {
        console.log('Hello, I am '+ this.name + ', I am ' + this.age +' age');
    }
}
user.sayHello();

let culculator = {
    number1: null,
    number2: null,
    num1: 0,
    num2: 0,
    ask: function() {
        this.number1 = +prompt('Please, enter first numbers');
        this.number2 = +prompt('Please, enter second numbers');

        this.num1 = this.number1;
        this.num2 = this.number2;
    },
    sum: function() {
    
        if (!isNaN(this.num1) && !isNaN(this.num2)) {
          let resultSum = this.num1 + this.num2;
          alert(resultSum);
        } else {
          alert('Invalid input!');
        }
    },
    mul: function() {
    
        if (!isNaN(this.num1) && !isNaN(this.num2)) {
          let resultMultiplication = this.num1 * this.num2;
          alert(resultMultiplication);
        } else {
          alert('Invalid input!');
        }
    }  
}
culculator.ask();
culculator.sum();
culculator.mul();