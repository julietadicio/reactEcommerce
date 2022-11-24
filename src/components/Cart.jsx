import { Link } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
    const test = useContext(CartContext);

    return(
        <>
        <h1>CART</h1>
        {
            test.map(item => <li>{item.name}</li>)
        }
        <Link to='/'><button>CONTINUE SHOPPING</button></Link>
        </>
    )
}

export default Cart