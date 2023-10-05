let userListHTML;

function getUser() {
        userListHTML = document.querySelector('.userList');
      
        fetch('https://gorest.co.in/public/v2/users')
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            let users = [];
            for (const key in data) {
                users.push({...data[key]});
            }
            return users;
          })
          .then((users) => {
            users.forEach((user) => {
                appendUser(user);
            })
          });
}

function appendUser(user) {
    userListHTML.innerHTML += `
            <div class="user col-6" data-id="${user.id}">
              <h2>
                <a href="posts.html?id=${user.id}" style="text-decoration: none">
                  ${user.name}
                  </a>
                  ${user.status === "active" ? '<img src="img.png">' : ''}
                </h2>  
              <p>${user.email}</p>
            </div>
          `;
}
window.addEventListener('load', () => {
    getUser();
});