import React from 'react';
import {Link} from "react-router-dom"

const ItemProduct = ({id, title, price, image, category, description}) => {
    const priceEdit= `$${price}`
    return ( 
        <Link to={{ pathname: `/article/${id}`, state: { title, price, image, category, description } }} className='item-link'>
        <article className='item-card'>
            <img  src={image} alt="Image of a product"/>
            <div className='item-text'>
                <h3>{title}</h3>
                <p>{priceEdit}</p>
                <p>{category}</p>
            </div>
        </article>
        </Link>
        
     );
}
 
export default ItemProduct;