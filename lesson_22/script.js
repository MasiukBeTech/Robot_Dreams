
console.log('Hello world!');
let a = 6;
let b = 5;
console.log('a > b:', a > b);
console.log('a < b:', a < b);

console.log('a >= b:', a >= b);
console.log('a <= b:', a <= b);


console.log('a == b:', a == b);

console.log('a != b:', a != b);

console.log('______________');

console.log('\'2\' > 1', '2' > 1)
console.log('\'01\' == 1', '01' == 1)

console.log('______==________');

console.log('1 == true', 1 == true)
console.log('0 == false', 0 == false)
console.log('\'\' == false', '' == false)
console.log('\'a\' == false', 'a' == false)
console.log('null == undefined', null == undefined)

console.log('______===________');

console.log('1 === true', 1 === true)
console.log('0 === false', 0 === false)
console.log('\'\' === false', '' === false)
console.log('\'a\' === false', 'a' === false)
console.log('null === undefined', null === undefined)

console.log('_______if_______');

// const year = prompt("The year of your birthday"); 
// if(Number(year) < 2005) alert("You're adult");

console.log('_______if_______');

// const year = prompt("The year of your birthday"); 


// if(+(year) < 2005) {
//     let d = null;
//     alert("You're adult");
// } else {
//     alert("You're a kid");
// }


// +(year) < 2005 ? alert("You're adult") : alert("You're a kid")


// let result = +(year) < 2005 ? "You're adult!!!!!!!" : "You're a kid!!!!!!!!";
// alert(result);

let f = 0 > 5 ? 10 : 50;
console.log( f);

let g = !(0 > 5) && 10 > 7 ? 10 : 50;
console.log('g:', g);

console.log('__________!__________');

console.log('!false', !false);
console.log('!true', !true);
console.log('!null', !null);
console.log('!undefined', !undefined);
console.log('!0', !0);
console.log('!""', !"");
console.log('!6', !6);
console.log('!"abc"', !"abc");


let isUserHasFriend = false;
let value = !isUserHasFriend;

console.log('isUserHasFriend', isUserHasFriend);
console.log('value', value);

console.log('__________??__________');

console.log(5 ?? 50);
console.log(undefined ?? 50);

console.log('__________let/var__________');

let x = 10;
var y = 5;

if (10 > 7) {
    let x = 20;
    var y = 15;

    console.log(x);
    console.log(y);
}

console.log(x);
console.log(y);

// console.log(h);
console.log(v);

let h = 11;
var v = 55;

console.log(v);

console.log('__________test__________');





// let number1 = +prompt('Please, enter first numbers');
// let number2 = +prompt('Please, enter second numbers');
// // console.log(number + number);
// // console.log(number + number);
// alert('Sum: ' + (number1 + number2) + '; Subtraction: ' + (number1 - number2) + '; Multiplication: ' + (number1 * number2) + '; Division: ' + (number1 / number2));


