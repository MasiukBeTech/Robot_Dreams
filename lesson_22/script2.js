
let number1 = prompt('Please, enter first numbers');
let number2 = prompt('Please, enter second numbers');

if (!number1 || !number2) {
    alert("You don't entered number");
}
else if(+number1 < +number2) {
   if (confirm("Are you sure you want to proceed with the operation?")) {
    alert('Sum: ' + (+number1 + +number2) + '; Subtraction: ' + (number1 - number2) + '; Multiplication: ' + (number1 * number2) + '; Division: ' + (number1 / number2));
  } else {
    console.log('Cancel');
  }
}
else if(+number2 === 0) {
    alert("You entered 0, you cannot divide by 0");
} else {
    alert('Sum: ' + (+number1 + +number2) + '; Subtraction: ' + (number1 - number2) + '; Multiplication: ' + (number1 * number2) + '; Division: ' + (number1 / number2));
}

