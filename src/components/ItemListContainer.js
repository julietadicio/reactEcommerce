import { customFetch } from "../utils/customFetch";
import products from "../utils/products";
import { useEffect, useState } from "react";
import ItemList from './ItemList'

const ItemListContainer = () => {
  const [datos, setDatos] = useState();

  useEffect(() => {
    customFetch(2000, products)
      .then((response) => setDatos(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {datos.map((item) => (
        <ItemList items={datos} />
      ))}
    </>
  );
};

export default ItemListContainer




// const  = (props) => {
//     return (

//         <div id="section1">
//             <h1 class="title">FACTOR TIERRA</h1>
//             <h1>
//                 {props.greeting}
//             </h1>
//             <a class="btn" href="#section3">Ir seccion3</a>
//         </div>

//     )
// }