import { useState, useEffect } from "react";
import Store from "./components/Store";
import axios from "axios";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import Product from "./components/Product";
import Navbar from "./components/Navbar/Navbar";


function App() {
  
  const [storeItem, setStoreItem]= useState([]);
  const [category, setcategory] = useState([])
  const [loading, setLoading] = useState(true);

   useEffect(()=>{
    (async function() {
      try {
        await axios.get("https://fakestoreapi.com/products").then(({data})=>{
          setLoading(false);
          setStoreItem(data);
        });
      } catch (e) {
        console.error(e);
      }
  })();

  (async function() {
    try {
      await axios.get("https://fakestoreapi.com/products/categories").then(({data})=>{
        setcategory(data);
      });
    } catch (e) {
      console.error(e);
    }
})();

    
  }, []);
  return (
  
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={
            <Store
            loading={loading}
            items={storeItem}
            cates={category}
            onItemAdd={(itemData) =>{
              setStoreItem([...storeItem, itemData])
              }}
              />
          } />
        <Route path="/product/:id" element={<Product/>}
        />
        <Route path="/categories/:item" element={<Store/>}></Route>
      </Routes>
    </BrowserRouter>

    );
  }
  
  export default App;
  
  