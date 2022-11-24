import { createContext, useState } from "react";

export const CartContext = createContext()

const CartContextProvider = (props) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (item, qty) => {
        let found = cartList.find(product => product.itemId === item.id);
        if (found === undefined) {
            setCartList([
                ...cartList,
                {
                    itemId: item.id,
                    itemImg: item.image[0],
                    itemName: item.name,
                    itemCost: item.cost,
                    itemQty: qty
                }
            ])
        } else {
            found.qtyItem += qty;
        }
    }

    const clear = () => {
        setCartList([])
    }

    const deleteItem = (id) => {
        let result = cartList.filter(item => item.idItem != id);
        setCartList(result);
    }

    return (
        <CartContext.Provider value={{ cartList, addToCart, clear, deleteItem }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider; 