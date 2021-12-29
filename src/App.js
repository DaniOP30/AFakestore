import { useState } from "react";
import Store from "./components/Store";

function App() {
  const [storeItem, setStoreItem]= useState([{
    title: "computer",
    price: 200
  },
  {
    title: "CD games",
    price: 30
  },
  {
    title: "keyboard",
    price: 50
  }
  ]);

  
  return (
    <div>
      <Store items= {storeItem} />
    </div>
  );
}

export default App;
