// import { useState } from "react";
// import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {

    return (
        <>
            <img src={item.image} alt="" />
            {item.name}
            {item.description}
            {item.stock}
            {item.cost}
        </>
    )
}

export default ItemDetail