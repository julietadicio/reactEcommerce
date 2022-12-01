import { createContext, useState } from "react";

export const CartContext = createContext()

const CartContextProvider = (props) => {
    const [cartList, setCartList] = useState([])

    const isInCart = (id) => {
        return cartList.some(el => el.id === id)
    }


    const addToCart = (item, qty) => {
        // vamos a crear un nuevo objeto con los datos que recibimos por parámetros.
        const newObj = {
            ...item,
            qty
        }
        // si el producto ya está en el carrito
        if (isInCart(newObj.id)) {
            // vamos a hacer un map del carrito
            cartList.map(el => {
                // si los id coinciden
                if (el.id === newObj.id) {
                    // sumamos la cantidad solamente
                    el.itemQty += newObj.itemQty
                }

                return (el)
            })

        }
        // si no coincide, va a agregar el producto al carrito
        else {
            setCartList([...cartList, newObj])

        }
    }

    const clear = () => {
        setCartList([])
    }

    
    const deleteItem = (id) => {
        let result = cartList.filter(item => item.idItem !== id);
        setCartList(result);
    }
    
    //numero items para el carrito
    const calcItems = () => {
        let count = 0
        cartList.forEach(prod => {
            count = count + prod.qty
        })
        return count
    }

    const calcTotal = () => {
        return cartList.reduce((prev, act) => prev + act.qty * act.cost, 0);
    }

    return (
        <CartContext.Provider value={{ 
            cartList, 
            addToCart, 
            clear, 
            deleteItem, 
            calcItems, 
            calcTotal 
            }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider; 