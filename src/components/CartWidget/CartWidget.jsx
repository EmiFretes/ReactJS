import './CartWidget.css'

import React from 'react'

const CartWidget = ({children}) => {
    return (
    <>
    <div>{children}</div>
    <img src='https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-shopping-cart.png' alt='carrito de compras' width={100}/> 
    </>
    )
}

export default CartWidget;