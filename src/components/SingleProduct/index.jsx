import React from 'react';
import {  useParams } from 'react-router-dom';
import useApi from '../../hooks/useApi';

const SingleProduct = () => {
    const { id } = useParams();
    let urlArticle= ` https://fakestoreapi.com/products/${id}`
    //const { title, price, image, category, description } = location.state;
    const { data, loading, error } = useApi(urlArticle)
    console.log(data)

    return ( 
        
            <div className='App'>
            <section className='singleProduct'>

                <h2>{data.title}</h2>
                <h3>${data.price}</h3>
                <img src={data.image} alt= "Image of a product"/>
                <h4>Category: {data.category}</h4>
                <p>{data.description}</p>
                 
            </section>
        </div>
        
  
     );
}
 
export default SingleProduct;