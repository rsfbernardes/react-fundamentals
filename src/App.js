import React from "react";

import Post from "./Post";

const category = 'Posts Of The Week'

function App() {
  return (
    <>
      <h1>JStack's Blog</h1>
      <h2>{category}</h2>

      <hr />

      <Post 
        post={{
          title: 'Title 01',
          subtitle: 'Subtitle 01'
        }}
      />
      <Post 
        post={{
          title: 'Title 02',
          subtitle: 'Subtitle 02'
        }}
      />
      <Post 
        post={{
          title: 'Title 03',
          subtitle: 'Subtitle 03'
        }}
      />
    </>
  );
};

export default App;