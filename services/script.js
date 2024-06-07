import DataManager from './data.js';

document.addEventListener("DOMContentLoaded", function() {
  const postsContainer = document.getElementById('posts-container');

  function renderPosts() {
    postsContainer.innerHTML = '';
    const posts = DataManager.getPosts();
    posts.forEach((post, index) => {
      const postCard = `
        <div class="col-md-8 mb-5">
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
                  <p class="card-text">${truncateText(post.content, 100)}</p>
                  <a href="${post.link}" class="btn btn-primary btn-sm">Read More</a>
                  <a href="update.html?id=${post.id}" class="btn btn-warning btn-sm">
                    <i class="bi bi-pencil-square"></i> Edit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      postsContainer.innerHTML += postCard;
    });
  }

  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  }

  renderPosts();
});
