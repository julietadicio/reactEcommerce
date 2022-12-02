import {
  query,
  where,
  collection,
  getDocs,
} from "@firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const firestoreFetch = async (idCategory) => {
  const document = idCategory
    ? query(collection(db, "products"), where("category", "==", idCategory))
    : collection(db, "products");
  const querySnapshot = await getDocs(document);
  const dataFromFirestore = querySnapshot.docs.map((item) => ({
    id: item.id,
    ...item.data(),
  }));

  return dataFromFirestore;
};

export const firestoreFetchOne = async (idItem) => {
  const docRef = doc(db, "products", idItem);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return {
      id: idItem,
      ...docSnap.data(),
    };
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};
