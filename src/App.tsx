import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { Post } from './components/Post';
import './App.css';
import { getPosts } from './api';
import { Posts } from './components/Posts';
import { Pagination } from './components/Pagination';
import { Header } from './components/Header';
import { CreatePosts } from './components/CreatePost';
import { DeletePost } from './components/DeletePost';


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
      <Header />
      {typeof (posts) === 'object' ? (
        <Router>

          <Switch>
            <Route path="/deletePost">
              <DeletePost />
            </Route>
            <Route path="/createPost">
              <CreatePosts />
            </Route>
            <Route exact path="/">
              <Link to="/createPost">
                <p className="createPost">
                  Creat post
                </p>
              </Link>
              <Posts posts={currentPosts} />
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts?.length}
                paginate={paginate}
              />
              <Link to="/deletePost">
                <p className="deletePost">
                  Delete Post
                </p>
              </Link>
            </Route>
            <Route path="/:id">
              <Post posts={posts} />
            </Route>
          </Switch>
        </Router>
      ) : (
        loadPosts()
      )}

    </>
  );
};


export default App;
