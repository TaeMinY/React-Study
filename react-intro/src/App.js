import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const title = <span>Hello World</span>;

  function handleClick() {
    alert("화이팅");
  }

  const text = "리액트 소수전공";
  return (
    <>
      <div className="App" style={{ backgroundColor: "red" }}></div>
      {title}
      <p onClick={handleClick}>{text}</p>
      {/* <span>Hello World</span> */}
    </>
  );
}

export default App;
