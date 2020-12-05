import React from 'react';
import PropTypes from 'prop-types';

  const itemList = [
    {
      id: 1,
      num: 3,
      name: "item1",
      image: "imageUrl"
    },
    {
      id: 2,
      num: 3,
      name: "item2",
      image: "imageUrl"
    },
    {
      id: 3,
      num: 3,
      name: "item3",
      image: "imageUrl"
    },
    {
      id: 4,
      num: 3,
      name: "item4",
      image:
      "imageUrl"
    },
    {
      id: 5,
      num: 3,
      name: "item5",
      image:
      "imageUrl"
    },
    {
      id: 6,
      num: 3,
      name: "item6",
      image:
      "imageUrl"
    },
    {
      id: 7,
      num: 3,
      name: "item7",
      image:
      "imageUrl"
    }
  ]

  function Test({ name, image, num}) {
    return (
      <div> 
        <h2>Test {name} section</h2>
        <h4>{num}</h4>
        <img src={image} alt={name} />
      </div>
    )
  }

  Test.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    num: PropTypes.number.isRequired,
  }

function App() {
  return (
    <div className="App">
      <h1>printItem</h1>
      {itemList.map(item => (
        <Test key={item.id} name={item.name}  image={item.image} num= {item.num} />
      ))}
    </div>
  );
}

export default App;
