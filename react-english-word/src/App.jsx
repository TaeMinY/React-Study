import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    font-family: "Noto Sans KR", sans-serif;
    box-sizing: border-box;
  }

  body{
    display:block;
  }
`;

const AppContainer = styled.div`
  max-width: 360px;
  height: 100vh;
  margin: 0 auto;
`;
function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <AppContainer>
        <Outlet></Outlet>
      </AppContainer>
    </>
  );
}

export default App;
