import DataManager from './data.js';

document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = parseInt(urlParams.get('id'));

  const post = DataManager.getPosts().find(p => p.id === postId);

  if (post) {
    document.getElementById('title').value = post.title;
    document.getElementById('author').value = post.author;
    document.getElementById('content').value = post.content;
    document.getElementById('img').value = post.img;
  }

  const postForm = document.getElementById('post-form');

  postForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const content = document.getElementById('content').value;
    const img = document.getElementById('img').value;

    const updatedPost = {
      id: post.id,
      title,
      date: post.date,
      author,
      content,
      img,
      link: post.link
    };

    DataManager.updatePost(updatedPost);
    window.location.href = 'index.html';
  });

  const deleteButton = document.getElementById('delete-button');
  deleteButton.addEventListener('click', function() {
    const confirmDelete = confirm("Are you sure you want to delete this article?");
    if (confirmDelete) {
      DataManager.deletePost(post.id);
      window.location.href = 'index.html';
    }
  });
});
