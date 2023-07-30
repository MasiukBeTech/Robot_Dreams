// let y = 'abc';
// let bool = !!y;
// console.log(bool);

// let str = 'zdr145';
// console.log(str[2], str.length);

console.log('Lesson 24');

let myGlobalSum;

function sum(a, b) {
    // let zrr = [1, 5, 10];
    if (typeof a === 'number' && !isNaN(a) && typeof b === 'number' && !isNaN(b)) {
        myGlobalSum = a + b;
    } else {
        console.log('Error');
    }  

    //  for (let index = 0; index < zrr.length; index++) {
    //     console.log(zrr[index]); 
    // }
    console.log('myGlobalSum', myGlobalSum);
}

sum(4, 5);
sum(7, null);
sum('fgfdg', 45)
sum(5, 30);

console.log("______diff_____");

function diff(a, b) {
    if (!a || !b) {
        return 'Error';
    }
    return a - b;
}

let i = diff(5, 2);
let ii = diff(45, 20);
let iii = diff(null, 2);

console.log(i);
console.log(ii);
console.log(iii);

console.log('______message_____')

let variableFunct = function(message) {
    console.log('variableFunct', message)
}
variableFunct();
variableFunct('hello');
variableFunct();

let arrowFunct = (message) => {
    console.log('arrowFunct', message)
}

arrowFunct();
arrowFunct('arrowFunct');
arrowFunct();

let arrowFunc = (a, b) => {
    return a + b;
};

let yyyy = arrowFunc(1, 5);

console.log(yyyy);

console.log('_________ Closures ________');

function count() {
    let counter = 0;
    return function () {
        // console.log(counter);
        return counter++;
    }
}

let c = count();
let c1 = count();
let c3 = count();

c();
c();
c();
c();
let o = c();
console.log('o', o);
o = 100;

c();
let oo = c();

console.log('oo', oo);
c1();
c1();
c1();
c1();
c1();
c1();
c3();
c3();
c3();


// let counter = 0;

// function count() {
//     counter++;
//     console.log(counter);
// }

// count();
// count();
// count();

function checking(value) {
    if ((value === 0 || value)) {
        return true;
    } else {
        return false;
    }
}

function sum2(a, b) {
    if (checking(a) && checking(b)) {
        return a + b;
    } else {
        return 'Error';
    }
}

console.log('sum2', sum2(10, 300));
