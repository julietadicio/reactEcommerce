import "./App.css";
import "primeicons/primeicons.css";
import NavBar from "../src/components/NavBar";
import Home from '../src/components/Home'
import Cart from "./components/Cart";
import ItemDetailContainer from "../src/components/ItemDetailContainer";
import ItemListContainer from "../src/components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./components/CartContext"

const App = () => {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:idCategory" element={<ItemListContainer />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
};

export default App;