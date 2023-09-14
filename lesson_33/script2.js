
Function.prototype.defer = function(ms) {
  const self = this;
  return function() {
    const args = arguments;
    setTimeout(function() {
      self.apply(null, args);
    }, ms);
  };
};

// check it
function pow(x, n) {
  let result = [];
  for (let i = 0; i < x.length; i++) {
    let res = x[i];
    for (let j = 1; j < n; j++) {
      res *= x[i];
    }
    result.push(res);
  }
  console.log(result);
}
let arr = [1, 2, 3];
let num = 2;

pow.defer(2000)(arr, num);


  