import React from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import { getComments } from '../api';

export const Post = ({ posts }) => {
  let { id } = useParams();
  let post;
  let isWrongId = false;
  let comments;
  id = Number.parseInt(id);

  if (typeof (posts) === 'object') {
    post = posts.filter(post => post.id === id);
    post = post[0];
    Promise.resolve(getComments(id)).then(rawComments => { comments = rawComments });
  }

  if (typeof (post) !== 'object') {
    isWrongId = true;
  }

  console.log(comments);

  return (
    <>
      {isWrongId ? (
        <h1 className="wronPage">
          404
        </h1>
      ) : (
        <div className="singlePost">
          <h1 className="singlePost__header">
            {post.title}
          </h1>
          <h2 className="singlePost__body">
            {post.body}
          </h2>
        </div>
      )}
    </>
  );
};
