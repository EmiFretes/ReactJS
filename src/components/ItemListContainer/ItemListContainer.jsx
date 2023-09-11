import {Item} from './Item'
import React from 'react'
import { useState } from 'react'

const ItemListContainer = (prop) => {
    const [users, setUsers] = useState()

    const productos = [{
        id:1,
        nombre:'Nike',
    },
    {
        id:2,
        nombre:'Adidas',
    }] 

   const newUSer = productos.forEach((user)=>user.id ===1)

   function cambio (){
    setUsers(newUSer)
 }

  return (
    <div>
    <h2>
        {prop.greeting}
    </h2>
    <button onClick={cambio}>Comprar </button>
    <div>
        <Item user={users} />
    </div>
    </div>
  )
}

export default ItemListContainer