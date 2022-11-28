import React, {useState} from "react";

function Item({ name, category }) {
  const [ addCart, setAddChart ] = useState(false);
  function handleClick() {
    setAddChart((addChart)=> !addChart) 
  }
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{addCart ? "Add to Cart" : "Remove from Cart"}</button>
    </li>
  );
}

export default Item;
