import React from 'react';
import '../App.css';


export const Posts = ({ posts }) => {
  return (

    <section className="posts">
      {posts?.map(post => (
        <a href={`/${post.id}`}>
          <div className="post">
            <p className="post__id">
              id is
              {' '}
              {post.id}
            </p>
            <h2 className="post__text-title">
              {post.title}
            </h2>
            <p className="post__text-body">
              {post.body}
            </p>
          </div>
        </a>

      ))}
    </section>
  );
};
