import React from 'react';

  const itemList = [
    {
      id: 1,
      name: "item1",
      image: "imageUrl"
    },
    {
      id: 2,
      name: "item2",
      image: "imageUrl"
    },
    {
      id: 3,
      name: "item3",
      image: "imageUrl"
    },
    {
      id: 4,
      name: "item4",
      image:
      "imageUrl"
    },
    {
      id: 5,
      name: "item5",
      image:
      "imageUrl"
    },
    {
      id: 6,
      name: "item6",
      image:
      "imageUrl"
    },
    {
      id: 7,
      name: "item7",
      image:
      "imageUrl"
    }
  ]

  function Test({ name, image}) {
    return (
      <div> 
        <h2>Test {name} section</h2>
        <img src={image} alt={name} />
      </div>
    )
  }


function App() {
  return (
    <div className="App">
      <h1>printItem</h1>
      {itemList.map(item => (
        <Test key={item.id} name={item.name}  image={item.image} />
      ))}
    </div>
  );
}

export default App;
