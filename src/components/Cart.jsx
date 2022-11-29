import { Link } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Button } from "@mui/material";

const Cart = () => {
    const { cartList } = useContext(CartContext);
    const test = useContext(CartContext)
    console.log(cartList)

    return (
        <>
            <h1 className="carritoTitle">Carrito</h1>
            {
                cartList.length === 0
                    ? <h2>Tu carrito esta vacío</h2>
                    : cartList.map(item => <div className="itemCart" key={item.id}>

                        <img src={item.image} alt="" />
                        <h1>{item.name} </h1>
                        <h2>{item.cost}$</h2>
                        <h2>{item.qty} item/s</h2>
                        <h2>$ total</h2>
                    </div>
                    )
            }
            <div className="orderSummary">
                {
                    cartList.length === 1
                        ? <h1>Tu orden esta vacía</h1>
                        : cartList.map(item => <div className="itemSummary">
                            key={item.id}
                            <h2>{item.name}</h2>
                            <h3>{item.qty}</h3>
                        </div>
                        )
                }
            </div>
            <Link to='/'><button>Seguir mirando</button></Link>
            {
                test.cartList.length > 0
                    ? <button onClick={test.clear}>Eliminar todo</button>
                    : <h2></h2>
            }

        </>
    )
}

export default Cart