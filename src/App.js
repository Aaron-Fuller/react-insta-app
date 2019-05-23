import React from 'react';
import ReactDOM from "react-dom";
import SearchBar from "./components/SearchBar";
import PostContainer from "./components/PostContainer";
import CommentSection from "./components/CommentSection";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <PostContainer />
        <CommentSection />

      </header>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
