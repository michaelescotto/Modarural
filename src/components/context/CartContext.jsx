import { createContext, useState } from "react";

export const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const addProducto = (producto, cantidad) => {
        if (checkCart(producto.id)){
            let product = cart.find(prod => prod.id === Item.id)
            product.cantidad += cantidad
            setCart([...cart])
        } else {
            setCart([...cart, {...producto, cantidad:cantidad}])
        }
    }
    const removeProducto = (id) => {
        const productos = cart.filter(producto => producto.id !== id)
        setCart([...productos])
    }
    const limpiador = () => {
        setCart([])
    }
    const checkCart = (id) => {
        return cart.some(producto => producto.id === id)
    }
    const cantidadProductos = () => {
        return cart.reduce((acumulador, producto) => acumulador += producto.cantidad, 0)
    }
    const sumaTotalProductos = () => {
        return cart.reduce((acumulador, producto) => acumulador += producto.cantidad * producto.precio, 0)
    }

    return(
        <CartContext.Provider value={{cart, addProducto, removeProducto, limpiador, cantidadProductos, sumaTotalProductos }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider