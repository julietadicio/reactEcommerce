import { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {

    const [itemCount, setItemCount] = useState(0)

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
        setItemCount(qty);
    }

    return (
        <>
            <div className="itemDetail">
                <img src={item.image} alt="" />
                <div className="detailContainer">
                    <h1>{item.name}</h1>
                    <h2>{item.description}</h2>
                    <h3>Stock disponible: {item.stock} unidades</h3>
                    <h2>${item.cost}</h2>
                <div className="countContainer">
                {
                    itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/cart' style={{ textDecoration: "none" }}><button>CheckOut</button></Link>
                }
                </div>
                </div>
            </div>
                
        </>
    )
}

export default ItemDetail