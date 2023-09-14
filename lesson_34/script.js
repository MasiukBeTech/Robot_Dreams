console.log('Lesson 34');

class Device {
  constructor (model, price, company) {
    this.model = model;
    this.company = company;
    this._price = price;
  }
  get price() {
    console.log('get price');
    return this._price + ' $';
  }
  set price(value) {
    console.log('set price');
    return this._price = value + 100;
  }
  getPrice() {
    return this._price;
  }
  #getVolumeOfBettery() {
    return '2000 mAh';
  }
}
let device = new Device ('iphone', 1000, 'Apple');

// console.log(device.price);
// console.log(device.company);
// console.log(device.getPrice());

class Iphone extends Device {
  #appleId = null;

  constructor (model, price, company, appleId) {
    super(model, price, company);
    this.#appleId = appleId;
  }
  findId() {
    return this.#appleId;
  }
  getPrice() {
    return super.getPrice() + 100;
  }
}
let iphone = new Iphone ('iphone', 1000, 'Apple', 'zdfhzn552gvbFb54');

console.log(iphone.price);
console.log(iphone.price);
console.log(iphone.price);
iphone.price = 2000;
console.log(iphone.price);
console.log(iphone.price);
console.log(iphone.company);
// console.log(iphone.getPrice());
console.log(iphone.findId());

console.log(iphone instanceof Device);

class Calculator { 
    static add(a, b) { 
      return a + b; 
  }
    static subtract(a, b) {
      return a - b;
  }
} 
console.log(Calculator.add(1, 2));
console.log(Calculator.subtract(1, 2));