import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";


function App() {
  const [items, setItems] = useState(itemData)
  const [isDarkMode, setIsDarkMode] = useState(false);
  // const appClass = isDarkMode ? "App dark" : "App light"

function onDarkModeClick() {
    setIsDarkMode(!isDarkMode);
  }
  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
  <Header onDarkModeClick={onDarkModeClick} isDarkMode={isDarkMode} />

  <ShoppingList items={items} />
  
  </div>
  );
}

export default App;
