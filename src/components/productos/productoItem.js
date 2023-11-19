import React, {useContext, useEffect, useState} from 'react';

import { DataContext } from "../../context/Dataprovider";
import { Link } from "react-router-dom"

export const ProductoItem = ({
    id,
    title,
    price,
    image,
    category,
    cantidad
}) => {
    const value = useContext(DataContext);
    const addCarrito = value.addCarrito;

    
// const db = getFirestore( )

// const itemRef = doc(db, "items", "id1")
// getDoc(itemRef).then((documento) => {
//     console.log (documento.data ())
// })
// const [items, setItems] = useState([])
// useEffect (() => {
//     const db = getFirestore()
//     const itemCollection = collection(db, "items")
//     getDocs(itemCollection).then(res =>
//         setItems(res.docs.map((doc)=>({id: doc.id, ...doc.data() })))) 
// }, [])

    return (
        
        
        <div className='producto'>
            <Link to={`/producto/${id}`}>
                <div className='producto__img'>
                    <img src={image} alt={title} />
                </div>
            </Link>

            <div className="producto__footer">
                <h1>{title}</h1>
                <p>{category}</p>
                <p className="price">${price}</p>
            </div>

            <div className="buttom">
                <button className="btn" onClick={() =>addCarrito(id) } >
                    Añadir al carrito
                </button>
                <div>
                <Link to={`/producto/${id}`} className="btn">Vista</Link>
                </div>
            </div>
        </div>
    );
}