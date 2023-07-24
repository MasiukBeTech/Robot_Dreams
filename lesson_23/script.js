
// let fruits = ["Apple", "Orange", "Pear"]; 
//     for (let i = 0; i < fruits.length; i++) {   
//       alert( fruits[i] );
//     }

let x = [1, 3, 6, 10];

console.log(x);
console.log(x[3] * x[1]);

let y = new Array(1, 3, 6, 10);

y[4] = 20;
y[0] = 101;
y[50] = 50;

console.log(y);
console.log('y[51]', y[51]);
console.log(y[3] * y[1]);

let z = ["Name", 5, null, undefined, [1, 2, 6, 10, true, ["1", "2", "3"]], false];

console.log(z);
console.log(z.length);
console.log(z[4][5][1]);
console.log(z[4][4], z[4][5]);


let i = [1, 2, 3]
i[3] = 5;

console.log(i);

i.push(40);
console.log(i);

i.pop();
console.log(i);

i.shift();
console.log(i);

console.log('-----------while------------');

let array = [10, 20, 30, 40, 50, 60];
let index = 0;

while (index < array.length) {
    console.log(index);
    // index = index + 1;
    index++;
}

console.log('---------do while--------------');

index = 0;
do {
    console.log(index);
    index++;
} while (index < 3);

console.log('----------- for ------------');

for(let k = 0; k < array.length; k++) {
    console.log(k, array[k] * 3);
}

let array2 = [
    [1, 2, 3, 4, 5, 6],
    [10, 20, 30],
    [100, 200, 300, 400]
];

for(let k = 0; k < array2.length; k++) {
    console.log(k, array2[k]);
}

for(let k = 0; k < array2.length; k++) {
    console.log(k, array2[k]);

    for(let j = 0; j < array2[k].length; j++) {
        if (k === 1) {
            continue;
            console.log(j, array2[k][j] * 500);
        } else {
            console.log(j, array2[k][j] * 3);
        }
    }
}

console.log(typeof 60);