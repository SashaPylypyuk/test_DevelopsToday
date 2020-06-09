import React from 'react';
import '../App.css';

export const Posts = ({ posts }) => {
  return (
    <section className="posts">
      {posts?.map(post => (
        <div className="post">
          <h2 className="post__text-title">
            {post.title}
          </h2>
          <p className="post__text-body">
            {post.body}
          </p>
        </div>
      ))}
    </section>
  );
};
