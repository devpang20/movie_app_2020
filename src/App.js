import React from 'react';

function Test({ item }) {
  return <h1>Test {item} section</h1>
}

function Test2(props) {
  console.log(props)
  return <h1>Test {props.item} section</h1>
}

function App() {
  return (
    <div className="App">
      Hello World!!!
      <Test item='one'/>
      <Test item='two'/>
      <Test item='three'/>
      <Test2
        a='test2'
        b='console'
      />
    </div>
  );
}

export default App;
