import { posts } from './data.js';

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));
  
    const post = posts.find(p => p.id === postId);
  
    if (post) {
      document.getElementById('post-title').textContent = post.title;
      document.getElementById('post-date-author').textContent = `${post.date} by ${post.author}`;
      document.getElementById('post-content').textContent = post.content;
      document.getElementById('post-img').src = post.img;
    } else {
      document.getElementById('post-title').textContent = 'Post not found';
    }
  });