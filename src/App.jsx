import "./App.css";
import "primeicons/primeicons.css";
import NavBar from "../src/components/NavBar";
import Home from '../src/components/Home'
import ItemListContainer from "../src/components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "../src/components/ItemDetailContainer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:idCategory" element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;