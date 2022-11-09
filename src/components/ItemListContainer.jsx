import customFetch from "../utils/customFetch";
import products from "../utils/products";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();
  console.log(idCategory);

  useEffect(() => {
    customFetch(
      2000,
      products.filter((item) => {
        if (idCategory === undefined) return item;
        return item.categoryId === parseInt(idCategory);
      })
    )
      .then((result) => setDatos(result))
      .catch((err) => console.log(err));
  }, [datos]);

  return (
    <>
      <ItemList items={datos} />
    </>
  );
};

export default ItemListContainer;
