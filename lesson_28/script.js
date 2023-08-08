console.log("Lesson 28");

const element = document.querySelector('.element');
element.addEventListener('click', (event) => {
  console.log('click: Hello Wrld from JS');
  // console.log(event); 
}); 

element.addEventListener('mouseover', (event) => {
  console.log('mouseover: Hello Wrld from JS');
  element.style.color = 'red';
  // console.log(event); 
});  
element.addEventListener('mouseleave', (event) => {
  console.log('mouseleave: Hello Wrld from JS');
  element.style.color = 'black';
  // console.log(event); 
}); 

const input = document.querySelector('.input-element');

input.addEventListener('keydown', (event) => {
  event.preventDefault();
  console.log('key was presed', event);
});