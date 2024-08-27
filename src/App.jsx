import React, { useRef, useState } from "react";
import AddComment from "./components/AddComment";
import Comments from "./container/Comments";
import Post from "./components/Post";
import "./App.css";
import Rate from "./components/Rate";
function App() {
  const [name, setName] = useState("")
  const ref = useRef()
  return (
    <div className="app">
      <Post />
      <Rate />
      <AddComment ref={ref} name={name} />
      <Comments refElement={ref} setName={setName} />
    </div>
  );
}

export default App;
