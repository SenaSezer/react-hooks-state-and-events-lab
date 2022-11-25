import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items,setItems]=useState(itemData);
  const [isDark, setDark] = useState(false)
  // replace 'false' with a state variable that can be toggled between true and false
  function HandleDarkMode(){
    setDark((isDark)=>!isDark);
  }// this will be used for the Dark Mode Toggle feature
  const appClass = false ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={() => setDark(!isDark)}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
