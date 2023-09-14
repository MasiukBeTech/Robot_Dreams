
class Vehicle {
  constructor (height, width, weight, color) {
    this.height = height;
    this.width = width;
    this.weight = weight;
    this.color = color;
  }
  getHeight() {
    return this.height + ' m';
  } 
  getWidth() {
    return this.width + ' m';
  }
  getWeight() {
    return this.weigth + ' kg';
  }
  getColor() {
    return this.color;
  }
}
class Car extends Vehicle {
  constructor (height, width, weight, color, numberOfDoors, maxPassangers) {
    super(height, width, weight, color);
    this.numberOfDoors = numberOfDoors;
    this.maxPassangers = maxPassangers;
  }
  getNumberOfDoors() {
    return this.numberOfDoors;
  }
  getMaxPassangers() {
    return this.maxPassangers;
  }
}
class Bike extends Vehicle {
  constructor (height, width, weight, color, numberOfWheels) {
    super(height, width, weight, color);
    this.numberOfWheels = numberOfWheels;
  }
  getNumberOfWheels() {
    return this.numberOfWheels;
  }
}
let vehicle = new Vehicle (1.8 , 3, 4000, 'blue');
let car = new Car(150, 200, 1000, 'red', 4, 5);
let bike = new Bike(100, 150, 10, 'green', 2);
console.log(vehicle);
console.log(car);
console.log(bike);
console.log('Vehicle:');
console.log('Height:', vehicle.getHeight());
console.log('Width:', vehicle.getWidth());
console.log('Weight:', vehicle.getWeight());
console.log('Color:', vehicle.getColor());
console.log('------------------------------');
console.log('Car:');
console.log('Height:', car.getHeight());
console.log('Width:', car.getWidth());
console.log('Weight:', car.getWeight());
console.log('Color:', car.getColor());
console.log('Number of Doors:', car.getNumberOfDoors());
console.log('Max Passengers:', car.getMaxPassangers());
console.log('------------------------------');
console.log('Bike:');
console.log('Height:', bike.getHeight());
console.log('Width:', bike.getWidth());
console.log('Weight:', bike.getWeight());
console.log('Color:', bike.getColor());
console.log('Number of Wheels:', bike.getNumberOfWheels());