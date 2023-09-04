console.log('Lesson 31');

let p = document.getElementsByTagName('p')[0];

function callback() {
    p.innerHTML = count;
}

let count = 0;

let someFunct = (func) => {
    count++;
    console.log(count);
    func();
};

someFunct(callback);
someFunct(callback);
someFunct(callback);
someFunct(callback);

console.log('Start');
   
setTimeout(() => {
  someFunct(callback);
}, 5000);

someFunct(callback);
someFunct(callback);
someFunct(callback);
someFunct(callback);
someFunct(callback);

console.log('End');

// let count2 = 0;
// setInterval(() => {
//     count2++;
//     console.log(count2);
// }, 2000);

let date = new Date("2022-03-25");
console.log(date);