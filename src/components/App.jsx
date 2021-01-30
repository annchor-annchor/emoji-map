import React from "react";
import menu from "../menu.js";

function createItem(item) {
  return (
    <Item
      key={item.id}
      img={item.emoji}
      name={item.name}
      meaning={item.meaning}
    />
  );
}

function Item(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img">
          {props.img}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.meaning}</dd>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Japanese cuisine</span>
      </h1>
      <dl className="dictionary">{menu.map(createItem)}</dl>
    </div>
  );
}

export default App;
