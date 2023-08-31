console.log('Lesson 32');

// let products = [];

// fetch('https://dummyjson.com/products').then((response) => {
  
//   return response.json();
// })
// .then((data) => {
//   console.log(data);
//   return data.products.filter((element) => {
//     return element.title.includes('iPhone');
//   });
// })
// .then((iPhones) => {
//   products = iPhones;
// })
// .catch((error) => {
//   console.log(error);
// })

// setTimeout(() => {
//   console.log(products);
// }, 1000);

let tweetsHTML = document.querySelector('.tweets');

fetch('https://rd-api-edf5f-default-rtdb.europe-west1.firebasedatabase.app/tweets.json').then(response => {
  return response.json();
})
.then((data) => {
  console.log(data);

  let tweets = [];
  for (const key in data) {
    tweets.push({...data[key], id: key });
  }
  return tweets;
})
.then((tweets) => {
  tweets.forEach((tweet) => {
        // let x = 10;
        // x += 10;
        // x = x + 10;

    tweetsHTML.innerHTML +=`
      <div class = 'tweet' data-id="${tweet.id}">
        <p>${tweet.title}</p>
        <span>${tweet.userName}</span>
        <button>Edit</button>
      </div>
    `;
  });
})

function post() {
  fetch('https://rd-api-edf5f-default-rtdb.europe-west1.firebasedatabase.app/tweets.json', {
  method: 'POST',
  body: JSON.stringify({
    title: "my tweet 5",
    userName: 'Iryna'
  })
}).then(response => {
  return response.json();
})
.then((data) => {
  console.log(data);
})
}

// post();

function patch() {
  fetch('https://rd-api-edf5f-default-rtdb.europe-west1.firebasedatabase.app/tweets/-NcYv5QY8V7pJbCJ7hXW.json', {
  method: 'PATCH',
  body: JSON.stringify({
    userName: 'Roman'
  })
}).then(response => {
  return response.json();
})
.then((data) => {
  console.log(data);
})
}

// patch();

function put() {
  fetch('https://rd-api-edf5f-default-rtdb.europe-west1.firebasedatabase.app/tweets/-NcYuq6m0piZ2N-nUVTd.json', {
  method: 'PUT',
  body: JSON.stringify({
    userName: 'Andrew'
  })
}).then(response => {
  return response.json();
})
.then((data) => {
  console.log(data);
})
}
// put();

function deleteFunc() {
  fetch('https://rd-api-edf5f-default-rtdb.europe-west1.firebasedatabase.app/tweets/-NcYuq6m0piZ2N-nUVTd.json', {
  method: 'DELETE'
}).then(response => {
  return response.json();
})
.then((data) => {
  console.log(data);
})
}

// deleteFunc();