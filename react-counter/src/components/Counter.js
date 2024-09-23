import { useState, useMemo, useEffect } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  const [number2, setNumber2] = useState(0);

  const numberIncrease = () => {
    setNumber(number + 1);
  };

  const numberDecrease = () => {
    setNumber(number - 1);
  };

  const number2Increase = () => {
    setNumber2(number + 1);
  };

  const number2Decrease = () => {
    setNumber2(number2 - 1);
  };

  const numberString = `현재 number는 ${number} 입니다`;

  const number2String = useMemo(() => {
    return `현재 number2는 ${number2} 입니다`;
  }, [number2]);

  useEffect(() => {
    console.log("처음 랜더링된 후에 딱 한 번만 실행");
  }, []);

  useEffect(() => {
    console.log("상태가 변경될 때");
  });

  useEffect(() => {
    console.log("Number1 상태가 변경될 때");
  }, [number]);

  useEffect(() => {
    console.log("Number2 상태가 변경될 때");
  }, [number2]);

  useEffect(() => {
    return () => {
      console.log("컴포넌트가 DOM에서 제거되기 전에 실행, 클린업 함수");
    };
  });

  return (
    <>
      <h1>{number}</h1>
      <button onClick={numberDecrease}>-</button>
      <button onClick={numberIncrease}>+</button>
      <div>{numberString}</div>
      <hr />

      <h1>{number2}</h1>
      <button onClick={number2Decrease}>-</button>
      <button onClick={number2Increase}>+</button>
      <div>{number2String}</div>
    </>
  );
}

export default Counter;
