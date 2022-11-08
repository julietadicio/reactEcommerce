import customFetch from "../utils/customFetch";
import products from "../utils/products";
import { useEffect, useState } from "react";
import ItemList from './ItemList'
import { useParams } from "react-router-dom";
import Item from "./Item";

const ItemListContainer = () => {
  const [datos, setDatos] = useState()
  const {idCategory} = useParams()
 console.log(idCategory);

useEffect(() => {
  customFetch(2000, products)
  .then(result => setDatos(result))
  .catch(err => console.log(err))
}, [datos])

  return(
    <>
     <ItemList items={datos} /> 
    </>
  )
}

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