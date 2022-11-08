import "./App.css";
import "primeicons/primeicons.css";
import NavBar from "../src/components/NavBar";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import ItemListContainer from "../src/components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer />
    </>
  );
};

export default App;
{
  /* <NavBar />

<ItemListContainer greeting='Todo lo que necesitas para armar la huerta de tus sueños' />

<Section2 />

<Section3 /> */
}

/*<BrowserRouter>
<NavBar />
  <Routes>

    <Route path='/' element={<ItemListContainer />} />


  </Routes>
</BrowserRouter>*/
