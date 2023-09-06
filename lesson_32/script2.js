// document.addEventListener("DOMContentLoaded", function () {
//   fetch('https://dummyjson.com/products')
//     .then(response => response.json())
//     .then(data => {
//       const productsContainer = document.getElementById("products");
//       if (data.products && Array.isArray(data.products)) {
//         data.products.forEach(product => {
//           const productDiv = document.createElement("div");
//           productDiv.classList.add("product");
//           const titleDiv = document.createElement("div");
//           titleDiv.classList.add("title");
//           titleDiv.textContent = product.title;
//           const priceDiv = document.createElement("div");
//           priceDiv.classList.add("price");
//           priceDiv.textContent = `${product.price} USD`;
//           const descriptionDiv = document.createElement("div");
//           descriptionDiv.classList.add("description");
//           descriptionDiv.textContent = product.description;
//           const image = document.createElement("img");
//           const imageUrl = product.images[0];
//           image.src = imageUrl;
//           image.alt = product.title;
//           productDiv.appendChild(titleDiv);
//           productDiv.appendChild(priceDiv);
//           productDiv.appendChild(descriptionDiv);
//           productDiv.appendChild(image);
//           productsContainer.appendChild(productDiv);
//         });
//       } else {
//         console.error("Incorrect data format");
//       }
//     })
//     // .catch(error => console.error("Error while receiving data:", error));
// });


document.addEventListener("DOMContentLoaded", function() {
  let productsHTML = document.querySelector('.products');

  fetch('https://dummyjson.com/products')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data.products;
    })
    .then((products) => {
      products.forEach((product) => {
        productsHTML.innerHTML += `
          <div class="product">
            <div class='product-info'>
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <p class='price'>Price: $ ${product.price}</p>
            <p>Discount: ${product.discountPercentage} %</p>
            </div>
            <img src="${product.images[0]}" alt="smartphones">
          </div>
        `;
      })
    });
});
