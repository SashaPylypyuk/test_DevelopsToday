import React, { useState, ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import { getComments, setComment } from '../api';

export const Post = ({ posts }) => {
  const [comm, addComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);
  const [noComments, setNoComments] = useState(false);
  let { id } = useParams();
  let post;
  let isWrongId = false;

  id = Number.parseInt(id, 10);

  const loadComments = () => {
    Promise.resolve(getComments(id)).then(rawComments => {
      const preparedComments = [] as string[];

      rawComments.comments.map(comment => preparedComments.push(comment.body));
      if (!preparedComments.length) {
        setNoComments(true);
      }

      setComments(preparedComments);
    });
  };

  if (!comments.length && noComments) {
    loadComments();
  }

  if (typeof (posts) === 'object') {
    post = posts.filter(post => post.id === id);
    post = post[0];
  }

  if (typeof (post) !== 'object') {
    isWrongId = true;
  }

  const onChangeComment = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    addComment(value);
  };

  const createComment = () => {
    const comment = {
      id,
      comm,
    };

    addComment('');
    setComment(comment);

    alert("comment is created!");
  };

  return (
    <>
      {isWrongId ? (
        <h1 className="wronPage">
          404
        </h1>
      ) : (
        <>
          <div className="singlePost">
            <h1 className="singlePost__header">
              {post.title}
            </h1>
            <h2 className="singlePost__body">
              {post.body}
            </h2>
          </div>
          <div className="comments">
            {comments.length ? (comments.map(comment => (
              <p>
                {comment}
              </p>
            ))) : (
              <p className="comments__empty">
                There are no comments
              </p>
            )}
          </div>
          <div>
            <form className="form">
              <label>
                Write your comment!
              </label>
              <input className="form__input" type="text" value={comm} onChange={onChangeComment} />
              <button className="form__button" type="button" onClick={createComment}>
                Comment!
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
};
