import { createContext, useState } from "react";

export const CartContext = createContext()


export const CartProvider = ({children}) =>{
    
    const [cart, setCart] = useState([])
    console.log(cart)
  
    const agregarAlCarrito = (item) =>{
      setCart ([...cart, item])
    }
  
    const isInCart = (id) =>{
      return cart.some((item) => item.id === id)
    }
  
    const totalCompra = () => {
        return cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
    }

    const vaciarCarrito = () =>{
        setCart ([])
    }

    const totalCantidad = () => {
        return cart.reduce ((acc,item) => acc + item.cantidad, 0)
    }

    const eliminarProducto = (id) =>{
        setCart (cart.filter((item) => item.id !== id))
    }

    return (
        <CartContext.Provider value={{
            cart, 
            agregarAlCarrito,
            isInCart,
            totalCompra,
            vaciarCarrito,
            totalCantidad,
            eliminarProducto
        }}>
        {children}
        </CartContext.Provider>
    )
}