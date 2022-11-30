import customFetch from "../utils/customFetch";
import products from "../utils/products";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../utils/firebaseConfig'

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();

  useEffect(async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  }, [idCategory]);

  return (
    <>
      <ItemList items={datos} />
    </>
  );
};

export default ItemListContainer;
