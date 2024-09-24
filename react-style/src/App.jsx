import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import "./App.css";
import theme from "./styles/theme";

const GlobalStyle = createGlobalStyle`
html {
  background-color: black;
}

* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}
`;

const Title = styled.h1`
  color: ${(props) => props.color || props.theme.primary};
`;

const Title2 = styled(Title)`
  font-size: 20px;
`;

const Box = styled.div`
  width: 400px;
  height: 400px;

  background-color: ${(props) => props.color || props.theme.primary};
`;

const Container = styled.div`
  display: flex;
`;

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <ThemeProvider theme={theme}>
        <Title color="blue">리액트</Title>
        <Title color="red">리액트2</Title>
        <Title>리액트2</Title>
        <Container>
          <Box color="blue"></Box>
          <Box color="red"></Box>
          <Box></Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
