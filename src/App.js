import React from "react";

import Post from "./Post";
import Header from "./Header";

function App() {
  return (
    <>
      <Header title="JStack's Blog">
      <h2>Posts Of The Week</h2>
      </Header>

      <hr />

      <Post 
        likes={20}
        post={{
          title: 'News Title 01',
          subtitle: 'News Subtitle 01'
        }}
      />
      <Post 
        likes={10}
        post={{
          title: 'News Title 02',
          subtitle: 'News Subtitle 02'
        }}
      />
      <Post 
        likes={50}
        post={{
          title: 'News Title 03',
          subtitle: 'News Subtitle 03'
        }}
      />
    </>
  );
};

export default App;