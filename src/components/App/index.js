import React, { useState } from "react";

import Post from "../Post";
import Header from "../Header";
import Button from "../Button";
import { Title } from './styles';

import { ThemeProvider } from "../../context/ThemeContext";

function App() {
  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', likes: 50, read: false, removed: true },
    { id: Math.random(), title: 'Title#02', subtitle: 'Sub#02', likes: 10, read: true, removed: false },
    { id: Math.random(), title: 'Title#03', subtitle: 'Sub#03', likes: 50, read: false, removed: false },
    { id: Math.random(), title: 'Title#04', subtitle: 'Sub#04', likes: 50, read: true, removed: false },
  ]);

  function handleInsert() {
    setPosts((prevState => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title#0${prevState.length + 1}`,
        subtitle: `Sub#0${prevState.length + 1}`,
        likes: 50,
        read: false,
        removed: false,
      },
    ]));
  }

  function handleRemovePost(postId) {
    setPosts(
      (prevState) => (prevState.filter(
        (post) => post.id !== postId
      ))
    );
  }

  return (
    <ThemeProvider>
      <Header>
        <Title as='h2'>
          Posts Of The Week
          <Button onClick={handleInsert}>Insert</Button>
        </Title>
      </Header>

      <hr />

      {posts.map(post => (
        <Post
          key={post.id}
          likes={post.likes}
          onRemove={handleRemovePost}
          post={post}
        />
      ))}
    </ThemeProvider>
  );
};

export default App;