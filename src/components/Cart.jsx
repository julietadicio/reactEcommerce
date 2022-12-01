import { Link } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "./CartContext";


const Cart = () => {
    const { cartList } = useContext(CartContext);
    const test = useContext(CartContext)

    return (
        <>
            <h1 className="carritoTitle">Carrito</h1>
            <div className="carrito">
                <div className="itemsCart">
                    {
                        cartList.length === 0
                            ? <h2>Tu carrito esta vacío</h2>
                            : cartList.map(item => <div className="itemCart" key={item.id}>

                                <img src={item.image} alt="" />
                                <h1>{item.name} </h1>
                                <h2>${item.cost} c/u</h2>
                                <h2>{item.qty} item/s</h2>
                                <button onClick={() => test.deleteItem(item.idItem)}>Eliminar</button>
                            </div>
                            )
                    }
                </div>
                <div className="orderSummary">
                    <h1>Resumen de compra</h1>
                    {
                        cartList.length === 0
                            ? <h2> Tu compra esta vacía</h2>
                            : cartList.map(item => <div key={item.id}>
                                <div className="itemSummary">
                                    <h2>{item.name}</h2>
                                    <h2>{item.qty} item/s</h2>
                                    <h2>${item.qty * item.cost}</h2>
                                </div>
                            </div>
                            )
                    }
                    <h1>${test.calcTotal()} total</h1>
                    <button style={{display: 'block', margin: 'auto'}}>Hacer pedido</button>
                </div>
            </div>
            <Link to='/'><button>Seguir mirando</button></Link>
            {
                test.cartList.length > 0 &&
                <button onClick={test.clear}>Eliminar todo</button>

            }
        </>
    )
}

export default Cart