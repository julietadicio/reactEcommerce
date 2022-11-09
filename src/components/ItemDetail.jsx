// import { useState } from "react";
// import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {

    return (
        <>
            {item.image}
            {item.name}
            {item.description}
            {item.stock}
            {item.cost}
        </>
    )
}

export default ItemDetail