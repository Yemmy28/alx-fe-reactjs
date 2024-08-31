import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { postId } = useParams();

  return (
    <div>
      <h1>Blog Post ID: {postId}</h1>
      {/* Fetch and display blog post based on postId */}
    </div>
  );
}

export default BlogPost;
