import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styled from "styled-components";

import "./App.css";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.color};
`;

function App() {
  return (
    <>
      <Box color="red"></Box>
    </>
  );
}

export default App;
