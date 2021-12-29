import { useState, useEffect } from "react";
import Store from "./components/Store";
import axios from "axios";
import {BrowserRouter, Router, Route,} from "react-router-dom";

function App() {
  const [storeItem, setStoreItem]= useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then(({data})=>{
      setLoading(false);
      setStoreItem(data);
    });
  }, [])
  return (
    <div>
      <Store loading={loading} items= {storeItem} onItemAdd={itemData=>{
        setStoreItem([...storeItem, itemData])
      }} />
    </div>
  );
}

export default App;
