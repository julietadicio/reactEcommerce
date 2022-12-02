import { collection, updateDoc, doc, increment, setDoc } from "firebase/firestore";
import { Link } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { serverTimestamp } from 'firebase/firestore'
import { db } from "../utils/firebaseConfig";
import Swal from "sweetalert2";


const Cart = () => {
    const { cartList } = useContext(CartContext);
    const test = useContext(CartContext)

    const crearOrden = () => {
        let orden = {
            buyer: {
                name: "John",
                email: "john@example.com",
                phone: "123-456-789"
            },
            date: serverTimestamp(),
            items: test.cartList.map(item => ({
                id: item.id,
                price: item.cost,
                name: item.name,
                qty: item.qty
            })),
            total: test.calcTotal()
        }


        const crearOrdenFirestore = async () => {
            const nuevoIdOrdenes = doc(collection(db, 'ordenes'))
            await setDoc(nuevoIdOrdenes, orden);
            return nuevoIdOrdenes
        }

        crearOrdenFirestore()
            .then(res => {
                Swal.fire(
                    res.id,
                    'Ese es el ID de tu orden!',
                    'success'
                )
                test.cartList.forEach(async (item) => {
                    const itemRef = doc(db, "products", item.id);
                    await updateDoc(itemRef, {
                        stock: increment(-item.qty)
                    });
                })


                test.clear()
            })
            .catch(err => console.log(err))
    }


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
                                <button onClick={() => test.deleteItem(item.id)}>Eliminar</button>
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
                    <button onClick={crearOrden} style={{ display: 'block', margin: 'auto' }}>Hacer pedido</button>
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