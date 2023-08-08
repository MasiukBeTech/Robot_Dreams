function sum(a, b) {
    return a + b;
  }
  module.exports = sum;
  
  let img = document.querySelector('img');

const addSomeClassToElement = (element) => {
    element.addEventListener('click', () => {
        if (element.classList.contains('test')) {
            element.classList.remove('test');
        } else {
            element.classList.add('test');
        }
    });
}

addSomeClassToElement(img);