console.log('HW28');

let img = document.querySelectorAll('main img');
let isActImgZoomed = false;

img.forEach(function(element) {
  element.addEventListener('click', (event) => {
    if (isActImgZoomed) {
      element.classList.add('clicked-bigger');
    } else {
      element.classList.remove('clicked-bigger');
    }
    isActImgZoomed = !isActImgZoomed;
  });
});




