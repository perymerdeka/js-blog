import DataManager from './data.js';

document.addEventListener("DOMContentLoaded", function() {
  const postForm = document.getElementById('post-form');

  postForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const content = document.getElementById('content').value;
    const img = document.getElementById('img').value;

    const newPost = {
      id: DataManager.getPosts().length + 1,
      title,
      date: new Date().toLocaleDateString(),
      author,
      content,
      img,
      link: `detail.html?id=${DataManager.getPosts().length + 1}`
    };
    DataManager.addPost(newPost);
    window.location.href = 'index.html';
  });
});
