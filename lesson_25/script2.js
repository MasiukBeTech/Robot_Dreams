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
    ask: function() {
        this.number1 = prompt('Please, enter first numbers');
        this.number2 = prompt('Please, enter second numbers');
    },
    sum: function() {
        let num1 = parseFloat(this.number1);
        let num2 = parseFloat(this.number2);
    
        if (!isNaN(num1) && !isNaN(num2)) {
          let resultSum = num1 + num2;
          alert(resultSum);
        } else {
          alert('Invalid input!');
        }
    },
    mul: function() {
        let num1 = parseFloat(this.number1);
        let num2 = parseFloat(this.number2);
    
        if (!isNaN(num1) && !isNaN(num2)) {
          let resultMultiplication = num1 * num2;
          alert(resultMultiplication);
        } else {
          alert('Invalid input!');
        }
    }  
}
culculator.ask();
culculator.sum();
culculator.mul();