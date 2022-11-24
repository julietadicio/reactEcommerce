import { Link } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
    const { cartList } = useContext(CartContext);
    const test = useContext(CartContext)
    console.log(cartList)

    return (
        <>
            <h1>CART</h1>
            {
                cartList.length === 0
                    ? <h2>Tu carrito esta vacío</h2>
                    : cartList.map(item => <div>
                        <img src={item.itemImg} alt="" />
                        <h1>{item.itemName} </h1>
                        <h2>{item.itemCost}</h2>
                        <h2>{item.itemQty}</h2>
                        </div> )
            }
            <Link to='/'><button>CONTINUE SHOPPING</button></Link>
            {
                test.cartList.length > 0
                ? <button onClick={test.clear}>Delete all</button>
                : <h2></h2>
            }
            
        </>
    )
}

export default Cart