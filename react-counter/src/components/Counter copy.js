// 클래스형으로 작성된 Counter입니다.
import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };
  }

  numberIncrease = () => {
    this.setState({ number: this.state.number + 1 });
  };

  numberDecrease = () => {
    this.setState({ number: this.state.number - 1 });
  };

  // shouldComponentUpdate() {
  //   return this.state.number % 2 === 0;
  // }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevState);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    const { number } = this.state;
    return (
      <>
        <h1>{number}</h1>
        <button onClick={this.numberDecrease}>-</button>
        <button onClick={this.numberIncrease}>+</button>
      </>
    );
  }
}

export default Counter;
