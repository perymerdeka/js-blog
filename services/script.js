import { posts } from './data.js';

document.addEventListener("DOMContentLoaded", function() {

})

const postsContainer = document.getElementById('posts-container');

posts.forEach(post => {
  const postCard = `
    <div class="col-md-8">
      <div class="card">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${post.img}" class="img-fluid" alt="Responsive image" style="margin: 1rem; display: block; margin-left: auto; margin-right: auto;">
          </div> 
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title"><a href="${post.link}">${post.title}</a></h5>
              <p class="card-text">
                <small class="text-muted">${post.date} by ${post.author}</small>
              </p>
              <p class="card-text">${post.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  postsContainer.innerHTML += postCard;
});
