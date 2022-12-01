import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {CartContext} from "./CartContext"

const ItemDetail = ({ item }) => {

    const [itemCount, setItemCount] = useState(0)
    const {addToCart}  = useContext(CartContext);

    const onAdd = (qty) => {
        Swal.fire(
            'Agregado!',
            'Seleccionaste ' + qty + ' items.',
            'success'
          )
        setItemCount(qty);
        addToCart(item, qty)
    }

    return (
        <>
            <div className="itemDetail">
                <img src={item.image} alt="" />
                <div className="detailContainer">
                    <h1>{item.name}</h1>
                    <h2>{item.description}</h2>
                    <h1>${item.cost}</h1>
                    <h2>{item.stock} unidades en stock</h2>
                    <div className="countContainer">
                        {
                            itemCount === 0
                                ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                                : <Link to='/cart' style={{ textDecoration: "none" }}><button>Ir al carrito</button></Link>
                        }
                    </div>
                
                </div>
            </div>

        </>
    )
}

export default ItemDetail