let sign = "#";
function sharp() {
    
    sign += "#";
    return sign;
}

sharp();
sharp();


let x = [50, 330, null, 5, '20', 70, false, 4, 10, 100];

function calculateSum(x) {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        if (typeof x[i] === "number") {
              sum += x[i];
            }  
      }
      return sum;
}
// let sumFun = calculateSum(x);

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




function Accumulator(number) {
    this.value = number;
}

Accumulator.prototype.increment = function() {
    return this.value + 1;
}
Accumulator.prototype.decrement = function() {
    return this.value - 1;
}

function CancelableAccumulator(number) {
    Accumulator.call(this, number);
}

CancelableAccumulator.prototype = Accumulator.prototype;

CancelableAccumulator.prototype.clear = function() {
    return this.value;
}

let num = new CancelableAccumulator(this.number);



// const { JSDOM } = require('jsdom');
// const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>');

// global.document = dom.window.document;
function handleImageClick() {
    let img = document.querySelectorAll('main img');
    let isActImgZoomed = false;

img.forEach(function(element) {
  element.addEventListener('click', (event) => {
    if (!isActImgZoomed) {
      element.classList.add('clicked-bigger');
    } else {
      element.classList.remove('clicked-bigger');
    }
    isActImgZoomed = !isActImgZoomed;
  });
});
}

module.exports = {
    sharp: sharp,
    calculateSum: calculateSum,
    myArrayMax: myArrayMax,
    myArrayMin: myArrayMin,
    CancelableAccumulator: CancelableAccumulator,
    handleImageClick: handleImageClick
};