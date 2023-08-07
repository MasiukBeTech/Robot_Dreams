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
        document.getElementById("sum").textContent = resultSum;
        document.getElementById("subtraction").textContent = resultSubtraction;
        document.getElementById("multiplication").textContent = resultMultiplication;
        document.getElementById("division").textContent = resultDivision;
        } else {
        console.log('Cancel');
      }
    }
    else if(+number2 === 0) {
        alert("You entered 0, you cannot divide by 0");
    } else {
        document.getElementById("sum").textContent = resultSum;
        document.getElementById("subtraction").textContent = resultSubtraction;
        document.getElementById("multiplication").textContent = resultMultiplication;
        document.getElementById("division").textContent = resultDivision;
    }
}
filling();

let kindResults = document.querySelectorAll('div span');
kindResults.forEach(function(span) {
    let value = parseInt(span.textContent);
    if (value < 0){
        span.style.color = 'red';
    } if (value > 0) {
        span.style.color = 'green';
    }
});



let sign = "#";
function sharp() {
    sign += "#";
    document.getElementById("output").textContent = sign;
}





let x = [50, 330, null, 5, '20', 70, false, 2, 10, 100];

function myArrayMax(arr) {
  let len = arr.length;
  let max = -Infinity;
  for (let i = 0; i < len; i++) {
    if (typeof arr[i] === "number" && arr[i] > max && !isNaN(arr[i])) {
        max = arr[i];
    }
  }
  return max;
}

let maxValue = myArrayMax(x);
document.getElementById("max-array").textContent = maxValue;


function myArrayMin(arr) {
  let len = arr.length;
  let min = Infinity;
  for (let i = 0; i < len; i++) {
    if (typeof arr[i] === "number" && arr[i] < min && !isNaN(arr[i])) {
      min = arr[i];
    }
  }
  return min;
}
let minValue = myArrayMin(x);
document.getElementById("min-array").textContent = minValue;


let kindValue = document.querySelectorAll('.my-array span');

kindValue.forEach(function(arr) {
    let value = parseInt(arr.textContent);
    let max = myArrayMax(x);
    let min = myArrayMin(x);
  
    let percent = (value - min) / (max - min); // Розраховуємо відсоток для opacity
    let opacity = 0.5 + percent * 0.5; // Залежно від відсотка, розраховуємо значення opacity
  
    arr.style.backgroundColor = 'purple';
    arr.style.opacity = opacity;
});