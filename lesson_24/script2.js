let number1 = prompt('Please, enter first numbers');
let number2 = prompt('Please, enter second numbers');

function sum(a, b) {
  if (typeof a === 'number' && !isNaN(a) && typeof b === 'number' && !isNaN(b)) {
    return a + b;
  }
}
let resultSum = sum(+number1, +number2)
// alert(resultSum);
function subtraction(a, b) {
  if (typeof a === 'number' && !isNaN(a) && typeof b === 'number' && !isNaN(b)) {
    return a - b;
  }
}
let resultSubtraction = subtraction(+number1, +number2)
// alert(resultSubtraction);
function multiplication(a, b) {
  if (typeof a === 'number' && !isNaN(a) && typeof b === 'number' && !isNaN(b)) {
    return a * b;
  }
}
let resultMultiplication = multiplication(+number1, +number2)
// alert(resultMultiplication);
function division(a, b) {
  if (typeof a === 'number' && !isNaN(a) && typeof b === 'number' && !isNaN(b)) {
    return a / b;
  }
}
let resultDivision = division(+number1, +number2)
// alert(resultDivision);

function filling() {
   if (!number1 || !number2) {
    let message = "You don't entered number";
    alert(message);
   } else if(number1 < number2) {
       if (confirm("Are you sure you want to proceed with the operation?")) {
        alert('Sum: ' + resultSum + '; Subtraction: '+ resultSubtraction + '; Multiplication: '+ resultMultiplication +'; Division: '+ resultDivision);
      } else {
        console.log('Cancel');
      }
    }
    else if(+number2 === 0) {
        alert("You entered 0, you cannot divide by 0");
    } else {
    alert('Sum: ' + resultSum + '; Subtraction: '+ resultSubtraction + '; Multiplication: '+ resultMultiplication +'; Division: '+ resultDivision);
   }
}
filling();

console.log('___________________')


let sign = "#";
function sharp() {
    sign += "#";
    console.log(sign);
}

sharp();
sharp();
sharp();
sharp();
sharp();

console.log('___________________')


let x = [50, 330, null, 5, '20', 70, false, 2, 10, 100];

function myArrayMax(arr) {
  let len = arr.length;
  let max = -Infinity;
  for (let i = 0; i < len; i++) {
    if (typeof arr[i] === "number" && arr[i] > max) {
        max = arr[i];
    }
  }
  return max;
}
console.log(myArrayMax(x));


function myArrayMin(arr) {
  let len = arr.length;
  let min = Infinity;
  for (let i = 0; i < len; i++) {
    if (typeof arr[i] === "number" && arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}
console.log(myArrayMin(x));











    