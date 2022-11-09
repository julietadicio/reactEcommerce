// import { useState } from "react";
// import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {

    return (
        <>
            <div className="itemDetail">
                <img src={item.image} alt="" />
                <div className="detailContainer">
                    <h1>{item.name}</h1>
                    <h2>{item.description}</h2>
                    <h3>Stock disponible: {item.stock} unidades</h3>
                    <h2>${item.cost}</h2>
                </div>
            </div>
        </>
    )
}

export default ItemDetail