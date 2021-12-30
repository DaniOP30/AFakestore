import { useState, useEffect } from "react";
import Store from "./components/Store";
import axios from "axios";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import Product from "./components/Product";


function App() {
  const [storeItem, setStoreItem]= useState([]);
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
    
  }, []);
  return (
   
    <BrowserRouter>
      <Routes>
      <Route path='/' element={
          <Store
          loading={loading}
          items={storeItem}
          onItemAdd={(itemData) =>{
            setStoreItem([...storeItem, itemData])
            }}
            />
        } />
      <Route path="/product/:id" element={<Product/>}
      />
      </Routes>
    </BrowserRouter>

    );
  }
  
  export default App;
  
  