// import { useState } from "react";
// import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {

    return (
        <>
            <img src={item.image} alt="" />
            <h1>{item.name}</h1>
            <h2>{item.description}</h2>
            <h3>Stock disponible: {item.stock} unidades</h3>
            <h3>${item.cost}</h3>
        </>
    )
}

export default ItemDetail