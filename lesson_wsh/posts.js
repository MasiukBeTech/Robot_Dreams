let postListHTML;

function getPost(id) {
  let urlParams = new URLSearchParams(window.location.search);
  // Отримати значення id з URL
  const userId = urlParams.get('id');

  fetch(`https://gorest.co.in/public/v2/users/${userId}/posts`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((post) => {
        appendPost(post);
    })
  })
}

function appendPost(post) {
  postListHTML = document.querySelector('.userPost');

  postListHTML.innerHTML += `
      <div class="user col-9" data-id="${post.id}">
        <h2>
          ${post.title}
        </h2>  
        <p>
          ${post.body}
        </p>
      </div>
    `;
}
window.addEventListener('load', () => {
    getPost();
});