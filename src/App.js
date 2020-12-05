import React from 'react';
import PropTypes from 'prop-types';

class App  extends React.Component {
  state = {
    count: 0
  };

  plus = () => {
    console.log("plus")
  };
  minus = () => {
    console.log("minus")
  };
  render() {
    return (
      <div>
        <h1>Class Component {this.state.count}</h1>
        <button onClick={this.plus}>+</button>
        <button onClick={this.minus}>-</button>
      </div>
    )
  }
}

export default App;
