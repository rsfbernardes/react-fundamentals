import React from "react";

import Post from "./Post";
import Header from "./Head";

function App() {
  return (
    <>
      <Header title="JStack's Blog">
        <h2>Posts Of The Week</h2>
      </Header>

      <hr />

      <Post 
        post={{
          title: 'News Title 01',
          subtitle: 'News Subtitle 01'
        }}
      />
      <Post 
        post={{
          title: 'News Title 02',
          subtitle: 'News Subtitle 02'
        }}
      />
      <Post 
        post={{
          title: 'News Title 03',
          subtitle: 'News Subtitle 03'
        }}
      />
    </>
  );
};

export default App;