import { Component } from "react";
import PropTypes from "prop-types";

class Introduce extends Component {
  render() {
    const { name, age } = this.props;

    return (
      <div>
        이름 : {name}, 나이 : {age}
      </div>
    );
  }
}

Introduce.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};

Introduce.defaultProps = {
  age: 30,
};

export default Introduce;
