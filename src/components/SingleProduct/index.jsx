import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const SingleProduct = () => {
    const location = useLocation();
    const { id } = useParams();
    if (!location.state) {
        return <div>No hay información del artículo</div>;
      }
    const { title, price, image, category, description } = location.state;
    return ( 
        <div className="App">
            <section className='singleProduct'>
                <h2>Detalles del artículo {id}</h2>
               <p>{title}</p>
                <p>Price: {price}</p>
                <p>Image: {image}</p>
                <p>Category: {category}</p>
                <p>{description}</p>
            </section>
            

        </div>
     );
}
 
export default SingleProduct;