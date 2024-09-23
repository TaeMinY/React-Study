import logo from "./logo.svg";
import "./App.css";
import { Component, useState } from "react";
// import Introduce from "./components/Introduce";
import FIntroduce from "./components/FIntroduce";
import Counter from "./components/Counter";
// class App extends Component {
//   render() {
//     return <Introduce></Introduce>;
//   }
// }

function App() {
  const [status, setStatus] = useState(true);

  return (
    <>
      {/* <Introduce name="홍길동" age={20}></Introduce>
      <Introduce name="홍길동2" age={10}></Introduce>
      <Introduce name="홍길동3" age={15}></Introduce> */}
      {/* <FIntroduce name="홍길동" age={20}></FIntroduce>
      <FIntroduce name="홍길동2" age={10}></FIntroduce>
      <FIntroduce name="홍길동3" age={15}></FIntroduce> */}

      {status ? (
        <button
          onClick={() => {
            setStatus(false);
          }}
        >
          OFF
        </button>
      ) : (
        <button
          onClick={() => {
            setStatus(true);
          }}
        >
          ON
        </button>
      )}
      {status && <Counter></Counter>}
    </>
  );
}

export default App;
