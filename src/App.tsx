import React, { useState } from 'react';
import './App.css';
import { getPosts } from './api';
import { Posts } from './components/Posts';
import { Pagination } from './components/Pagination';


const App = () => {
  const [posts, setPosts] = useState<Post[]>();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(21);

  const loadPosts = () => {
    Promise.resolve(getPosts()).then(rawPosts => {
      const preparedPosts = rawPosts.filter(post => post.body?.length > 0);

      setPosts(preparedPosts);
    });
  };

  if (!posts?.length) {
    loadPosts();
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <header className="header">
        <h1 className="header__text">
          Blog for DevelopToday
        </h1>
      </header>
      <Posts posts={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts?.length}
        paginate={paginate}
      />
    </>
  );
};


export default App;
