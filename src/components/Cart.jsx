import { Link } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
    const {cartList} = useContext(CartContext);
    console.log(cartList)

    return(
        <>
        <h1>CART</h1>
        {
            cartList.length === 0
            ? <h2>Tu carrito esta vacío</h2>
            : cartList.map(item => <li>{item.name}</li>)
        }
        <Link to='/'><button>CONTINUE SHOPPING</button></Link>
        </>
    )
}

export default Cart