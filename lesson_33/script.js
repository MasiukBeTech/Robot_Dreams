console.log('Lesson 33');

class Device {
  constructor (model, company) {
    this.model = model;
    this.company = company;
  }
  getPrice() {
    return '1000$';
  }
  #getVolumeOfBettery() {
    return '2000 mAh';
  }
}
let iphone = new Device('iphone', 'apple');
console.log(iphone);
console.log(iphone.getPrice());

class User {
  constructor () {}
  getUserName() {
    return 'Iryna';
  }
  #checkUserIsLogged() {
    return true;
  }
  addToCard() {
    if (this.#checkUserIsLogged()) {
      console.log('add to card');
    } else {
      console.error('User has to be logged');
    }
  }
}
let user = new User();
console.log(user);
user.addToCard();