function Accumulator(number) {
    this.value = number;
}

Accumulator.prototype.increment = function() {
    console.log(this.value + 1);
}
Accumulator.prototype.decrement = function() {
    console.log(this.value - 1);
}

function CancelableAccumulator(number) {
    Accumulator.call(this, number);
}

CancelableAccumulator.prototype = Accumulator.prototype;

CancelableAccumulator.prototype.clear = function() {
    // this.value = null;
    console.log(this.value);
}

this.number = +prompt('Please, enter number');

let num = new CancelableAccumulator(this.number);

num.increment();
num.decrement();
num.clear();



