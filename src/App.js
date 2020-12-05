import React from 'react';

function Test({ name, image}) {
  return (
    <div> 
      <h2>Test {name} section</h2>
      <img src={image} />
    </div>
  )

}

  const itemList = [
    {
      name: "item1",
      image: "imageUrl"
    },
    {
      name: "item2",
      image: "imageUrl"
    },
    {
      name: "item3",
      image: "imageUrl"
    },
    {
      name: "item4",
      image:
      "imageUrl"
    },
    {
      name: "item5",
      image:
      "imageUrl"
    },
    {
      name: "item6",
      image:
      "imageUrl"
    },
    {
      name: "item7",
      image:
      "imageUrl"
    }
  ]


function App() {
  return (
    <div className="App">
      <h1>printItem</h1>
      {itemList.map(item => (
        <Test name={item.name}  image={item.image} />
      ))}
    </div>
  );
}

export default App;
