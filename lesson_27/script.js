console.log("Lesson 27");

let div = document.createElement('div');

console.dir(div);

let h1 = document.getElementsByTagName('h1');
let p = document.getElementsByClassName('my-p');
let testDiv = document.getElementById('my-test-div');

let img = document.querySelector('span img');
let images = document.querySelectorAll('span img');

console.log(h1);
console.dir(testDiv);
console.dir(p);
console.dir(img);
console.dir(images);

let beforeH2 = document.createElement('h2');
beforeH2.innerText = 'before h2';
beforeH2.style.color = 'red';

let afterH2 = document.createElement('h2');
afterH2.innerText = 'after h2';
afterH2.style.color = 'green';
afterH2.style.fontSize = '40px';

div.innerHTML = '<h3 class="my-h3"><u><i>My div from JS</i></u></h3>';
div.style.backgroundColor = 'purple';
div.style.color = '#fff';
div.style.width = '400px';
div.style.height = '100px';

testDiv.appendChild(div);
testDiv.append(document.createElement('h1'));
testDiv.prepend(document.createElement('h1'));
testDiv.before(beforeH2);
testDiv.after(afterH2);
testDiv.replaceWith(div);

let tweets = [
  {
    id: 'abcsfgsfdg',
    author: 'John',
    title: 'test 1',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet error porro ipsa enim similique tenetur, laboriosam culpa hic ullam facilis dicta eos sapiente nostrum blanditiis sit, adipisci vero molestias quas?'
  },
  {
    id: 'adfgdfgdbc',
    author: 'Bill',
    title: 'test 2222',
    isAuthorVerified: true,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet error porro ipsa enim similique tenetur, laboriosam culpa hic ullam facilis dicta eos sapiente nostrum blanditiis sit, adipisci vero molestias quas?'
  },
  {
    id: 'afghfghfbc',
    author: 'Tom',
    title: 'test 1',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet error porro ipsa enim similique tenetur, laboriosam culpa hic ullam facilis dicta eos sapiente nostrum blanditiis sit, adipisci vero molestias quas?'
  },
  {
    id: 'adfhfghfghbc',
    author: 'Agnieszka',
    isAuthorVerified: true,
    title: 'test 1',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet error porro ipsa enim similique tenetur, laboriosam culpa hic ullam facilis dicta eos sapiente nostrum blanditiis sit, adipisci vero molestias quas?'
  },
  {
    id: 'asdsfsdfsdgdfgdfbc',
    author: 'Wojtek',
    title: 'test 1',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet error porro ipsa enim similique tenetur, laboriosam culpa hic ullam facilis dicta eos sapiente nostrum blanditiis sit, adipisci vero molestias quas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet error porro ipsa enim similique tenetur, laboriosam culpa hic ullam facilis dicta eos sapiente nostrum blanditiis sit, adipisci vero molestias quas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet error porro ipsa enim similique tenetur, laboriosam culpa hic ullam facilis dicta eos sapiente nostrum blanditiis sit, adipisci vero molestias quas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet error porro ipsa enim similique tenetur, laboriosam culpa hic ullam facilis dicta eos sapiente nostrum blanditiis sit, adipisci vero molestias quas?'
  }
];

let tweetsContainer = document.getElementById('tweets-container');

tweets.forEach(function(element) {
    let div = document.createElement('div');
    div.classList.add('tweet');
    div.classList.add(`tweet-${element.id}`);

    div.innerHTML = `
    <h2>
    ${element.author}
    ${element.isAuthorVerified ? '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/1200px-Twitter_Verified_Badge.svg.png">' : ''}
    </h2>
    <h4>${element.title}</h4>
    <p>${element.text}</p>
    `;
    tweetsContainer.append(div);
});

let tweetsHTMLList = document.querySelectorAll('.tweet');

console.log(tweetsHTMLList);
console.log(tweetsHTMLList[3].clientWidth);