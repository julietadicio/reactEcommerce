import customFetch from "../utils/customFetch";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../utils/firebaseConfig'
import { query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();


  const getData = async () => {
    const document = idCategory
      ? query(collection(db, "products"), where('category', '==', idCategory))
      : collection(db, "products")
    const querySnapshot = await getDocs(document)
    const dataFromFirestore = querySnapshot.docs.map(item => ({
      id: item.id,
      ...item.data()
    }))

    setDatos(dataFromFirestore)
  }

  useEffect(() => {
    getData()
  }, [idCategory])

  return (
    <>
      <ItemList items={datos} />
    </>
  );
};

export default ItemListContainer;
