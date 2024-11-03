// src/components/PostList.js
import React from "react";
import usePosts from "../cutomHook/usePosts/usePosts";

const PostList = () => {
  // Use the hook with the API URL
  const { posts, loading, error } = usePosts(
    "https://jsonplaceholder.typicode.com/posts"
  );

  // Show loading message if loading is true
  if (loading) return <p>Loading posts...</p>;

  // Show error message if an error occurred
  if (error) return <p>Error: {error}</p>;

  // Display the posts
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
