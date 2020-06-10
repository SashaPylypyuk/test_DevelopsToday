import React, { useState, ChangeEvent } from 'react';
import '../App.css';
import { deletePost } from '../api';

export const DeletePost = () => {
  const [id, setId] = useState('');

  const onChangeId = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setId(value);
  };

  const deletePos = () => {
    deletePost(id);
    setId(' ');
    alert('Post deleted!');
  };

  return (
    <form className="form">
      <label>
        Write an id
      </label>
      <input className="form__input" type="text" value={id} onChange={onChangeId} />
      <button className="form__button" type="button" onClick={deletePos}>
        Delete!
      </button>
    </form>
  );
};
