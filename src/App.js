import React from 'react';
import PropTypes from 'prop-types';

class App  extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor")
  }
  state = {
    count: 0
  };

  plus = () => {
    this.setState(current => ({ count: current.count +1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count -1 }));
  };
  componentDidMount(){
    console.log("component rendered")
  }
  componentDidUpdate(){
    console.log("update")
  }

  componentWillUnmount(){
    console.log("bye") //retry
  }

  render() {
    console.log("rendering")
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
