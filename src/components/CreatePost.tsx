import React, { useState, ChangeEvent } from 'react';
import '../App.css';

export const CreatePosts = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const titleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setTitle(value);

    console.log(title);
  };

  const bodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    setBody(value);
    console.log(body);
  };

  return (
    <div className="createPost__wrapper">
      <form className="form">
        <label>
          Write a title
        </label>
        <input type="text" className="form__input" onChange={titleChange}/>
        <label>
          Write a body
        </label>
        <textarea name="comment" className="form__input" onChange={bodyChange}/>
        <button className="form__button" type="submit">
          Create post
        </button>
      </form>
    </div>
  );
};
