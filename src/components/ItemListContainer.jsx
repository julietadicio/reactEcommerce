import customFetch from "../utils/customFetch";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../utils/firebaseConfig'

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();
  
  useEffect(() => {
    getData()
  }, [idCategory])

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const dataFromFirestore = querySnapshot.docs.map(item => ({
      id: item.id,
      ...item.data()
    }))
    setDatos(dataFromFirestore)
  }


  return (
    <>
      <ItemList items={datos} />
    </>
  );
};

export default ItemListContainer;
