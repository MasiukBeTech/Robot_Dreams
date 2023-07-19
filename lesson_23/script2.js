let x = [50, 330, null, 5, '20', 70, false, 10, 100, 2];
let sum = 0;


for (let i = 0; i < x.length; i++) {
  if (typeof x[i] === "number") {
        sum += x[i];
      }  
}
console.log('Sum: ', sum);

let min = x[0];
let max = x[0];

for (let i = 0; i < x.length; i++) {
  if (typeof x[i] === "number") {
    if (x[i] < min) {
      min = x[i];
    }
    if (x[i] > max) {
      max = x[i];
    }
  }
}

console.log("Min number: " + min);
console.log("Max number: " + max);


 for (let i = 0; i <= 5; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "#";
  }
  console.log(line);
}







// console.log(myArrayMax(x));

// function myArrayMax(arr) {
//   let len = arr.length;
//   let max = -Infinity;
//   while (len--) {
//     if (arr[len] > max) {
//       max = arr[len];
//     }
//   }
//   return max;
// }


    