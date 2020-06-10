import React, { useState, ChangeEvent, FC } from 'react';
import '../App.css';
import { setPost } from '../api';

export const CreatePosts: FC = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const titleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setTitle(value);
  };

  const bodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    setBody(value);
  };

  const createPost = () => {
    const post = {
      title,
      body,
    };

    setTitle('');
    setBody('');
    setPost(post);

    alert('Post created!!!');
  };

  return (
    <div className="createPost__wrapper">
      <form className="form">
        <label>
          Write a title
        </label>
        <input type="text" className="form__input" onChange={titleChange} value={title} />
        <label>
          Write a body
        </label>
        <textarea name="comment" className="form__input" onChange={bodyChange} value={body} />
        <button className="form__button" type="button" onClick={createPost}>
          Create post
        </button>
      </form>
    </div>
  );
};
