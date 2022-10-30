import React, { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"
import Carritos from "./views/Carritos"
import Home from "./views/Home"
import Pizza from "./views/Pizza"
import './assets/css/bootstrap.min.css'
import CartContext from "./contexts/CartContext"
import ProductContext from "./contexts/ProductContext"

function App() {
  const [data, setData] = useState(0)
  const sharedState = {data, setData}
  
  const [products, setProducts] = useState([])
  const productState = {products, setProducts}
  
  return (
    <ProductContext.Provider value={productState}>
      <CartContext.Provider value={sharedState}>
        <BrowserRouter>
            <Routes>
              <Route path="/Home" element={<Home/>} />
              <Route path="/Carrito" element={<Carritos />} />
              <Route path="/Pizza/:id" element={<Pizza />} />
              <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
