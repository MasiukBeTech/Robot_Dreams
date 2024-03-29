let reviewData = {};
let reviewArray = [];
let reviewObject = [];
let reviewsList;
let reviewForm;
let starRating = null;
let stars;
let isUpdateReviewID = null;

function initStarRating() {
  stars = document.querySelectorAll('.star-rating span');
  
  stars.forEach((star) => {
    star.addEventListener('click', () => {
        console.log(star.attributes['data-id'].value);
        starRating = parseInt(star.attributes["data-id"].value);  // parseInt щоб зробити з стрінгу номер
        reviewData.starRating = starRating;
        stars.forEach((star) =>{
          star.classList.remove('checked');
        });

        for (let i = 0; i < starRating; i++) {
          stars[i].classList.add("checked");
        };
    });
  })
}

function appendReviews(review) {
  reviewsList.innerHTML =`
    <div class="review" data-id="${review.id}">
        <h4>${review.username}</h4>
        <span class="fa fa-star ${
          review.starRating >= 1 ? "checked" : ""
        }"></span>
        <span class="fa fa-star ${
          review.starRating >= 2 ? "checked" : ""
        }"></span>
        <span class="fa fa-star ${
          review.starRating >= 3 ? "checked" : ""
        }"></span>
        <span class="fa fa-star ${
          review.starRating >= 4 ? "checked" : ""
        }"></span>
        <span class="fa fa-star ${
          review.starRating >= 5 ? "checked" : ""
        }"></span>
        <p>${review.userReview}</p>
        <button type="button" class="btn btn-danger btn-delete">Delete</button>
        <button type="button" class="btn btn-info btn-update">Update</button>
    </div>
  ` + reviewsList.innerHTML;

  let reviewsDeleteButton = document.querySelectorAll('.review .btn-delete');
  let reviewsUpdateButton = document.querySelectorAll('.review .btn-update');

  reviewsDeleteButton.forEach((button) => {
    button.addEventListener('click', () => {
      deleteReview(button.parentNode.attributes['data-id'].value);
    })
  })
  reviewsUpdateButton.forEach((button) => {
    button.addEventListener('click', () => {
      resetForm();

      isUpdateReviewID = button.parentNode.attributes['data-id'].value;

      console.log(reviewObject[isUpdateReviewID]);
      reviewData = {
        ...reviewObject[isUpdateReviewID]
      };

      for (let i = 0; i < reviewObject[isUpdateReviewID].starRating; i++) {
        stars[i].classList.add("checked");
      };

      let username = document.querySelector('#username');
      let userReview = document.querySelector('#user-review');

      username.value = reviewObject[isUpdateReviewID].username;
      userReview.value = reviewObject[isUpdateReviewID].userReview;
      
      // deleteReview(button.parentNode.attributes['data-id'].value);
    })
  })
}

function resetForm() {
  reviewForm.reset();
  stars.forEach((star) =>{
    star.classList.remove('checked');
  });
  isUpdateReviewID = null;
}

function getReview() {
  reviewsList = document.querySelector('.reviews-list');
  reviewArray = [];
  reviewsList.innerHTML = '';

  fetch(
    "https://rd-api-edf5f-default-rtdb.europe-west1.firebasedatabase.app/reviews.json",
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      reviewObject = data;

      let reviews = [];
      for (const key in data) {
        reviews.push({...data[key], id: key });
      }
      reviewArray = reviews;
      return reviews;
    })
    .then((reviews) => {
      reviews.forEach((review) => {
        appendReviews(review);
      });
    })
}

function handleInvalidData() {
  alert('Please, enter you review');
}

function sendData () {
  let username = document.querySelector('#username').value;
  let userReview = document.querySelector('#user-review').value;

  reviewData.username = username;
  reviewData.userReview = userReview;

  if(!reviewData.username || !reviewData.userReview || !reviewData.starRating) {
    handleInvalidData()
  }

  console.log(reviewData);
  if (isUpdateReviewID) {
    updateReview(isUpdateReviewID, reviewData);
  } else {
    sendReview();
  }
}

function sendReview() {
  fetch(
    "https://rd-api-edf5f-default-rtdb.europe-west1.firebasedatabase.app/reviews.json",
    {
      method: "POST",
      body: JSON.stringify(reviewData),
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      reviewArray.push(reviewData);
      appendReviews(reviewData);
      resetForm();
  })
}

function deleteReview(id) {
  fetch(
    `https://rd-api-edf5f-default-rtdb.europe-west1.firebasedatabase.app/reviews/${id}.json`,
    {
      method: "DELETE"
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      document.querySelector(`.review[data-id=${id}]`).remove();
  })
}

function updateReview(id, data) {
  fetch(
    `https://rd-api-edf5f-default-rtdb.europe-west1.firebasedatabase.app/reviews/${id}.json`,
    {
      method: "PUT",
      body: JSON.stringify(data),
    }
  )
    .then((response) => {
      return response.json();
    })
    .then(() => {
      resetForm();
      getReview();
  })
}


window.addEventListener('load', () => {
  let send = document.querySelector('#send-review');
  reviewForm = document.querySelector('.review-form');

  getReview();
  initStarRating();

  send.addEventListener('click', sendData);
});