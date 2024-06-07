const DataManager = (() => {
  const STORAGE_KEY = 'posts';

  // Load posts from localStorage if available
  let posts = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [
    {
      id: 1,
      title: "Article Title 1",
      date: "January 1, 2024",
      author: "Author Name 1",
      content: "Content highlight goes here. This is a brief summary of the article to entice the reader to click and read more. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna.",
      img: "https://picsum.photos/200",
      link: `detail.html?id=1`,
    },
    {
      id: 2,
      title: "Article Title 2",
      date: "January 2, 2024",
      author: "Author Name 2",
      content: "Another content highlight. This is a brief summary of the article to entice the reader to click and read more. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna.",
      img: "https://picsum.photos/200",
      link: `detail.html?id=2`,
    }
  ];

  const savePosts = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  };

  const getPosts = () => posts;

  const addPost = (post) => {
    posts.push(post);
    savePosts();
    console.log('Post added:', post);
  };

  const updatePost = (updatedPost) => {
    const index = posts.findIndex(post => post.id === updatedPost.id);
    if (index !== -1) {
      posts[index] = updatedPost;
      savePosts();
      console.log('Post updated:', updatedPost);
    }
  };

  const deletePost = (postId) => {
    posts = posts.filter(post => post.id !== postId);
    savePosts();
    console.log('Post deleted:', postId);
  };

  return {
    getPosts,
    addPost,
    updatePost,
    deletePost
  };
})();

export default DataManager;

