import DataManager from './data.js';

document.addEventListener('DOMContentLoaded', function() {
  // Mendapatkan parameter id dari URL
  const urlParams = new URLSearchParams(window.location.search);
  const postId = parseInt(urlParams.get('id'));

  // Mengambil post berdasarkan id dari DataManager
  const post = DataManager.getPosts().find(p => p.id === postId);

  if (post) {
    // Menampilkan detail post di halaman
    document.getElementById('post-title').textContent = post.title;
    document.getElementById('post-date-author').textContent = `${post.date} by ${post.author}`;
    document.getElementById('post-content').textContent = post.content;
    document.getElementById('post-img').src = post.img;

    // Menambahkan event listener untuk tombol update
    const updateButton = document.getElementById('update-post-button');
    updateButton.href = `update.html?id=${post.id}`;
  } else {
    // Menampilkan pesan jika post tidak ditemukan
    document.getElementById('post-title').textContent = 'Post not found';
  }
});
