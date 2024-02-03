import React from 'react';
import ItemProduct from '../ItemProduct';
import useApi from '../../hooks/useApi';

const ProductSpace = ({ count }) => {
    let urlComplete= `https://fakestoreapi.com/products?limit=${count}`
    const { data, loading, error } = useApi(urlComplete);

    return (
        <section className='product_content'>
            {
                count > 0 ? (
                    !loading ? (
                        data.map(item => (
                            <ItemProduct
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                image={item.image}
                                category={item.category}
                            />
                        ))
                    ) : (
                        <p>Cargando...</p>
                    )
                ) : (
                    <p>No hay productos disponibles.</p>
                )
            }
        </section>
    );
}

export default ProductSpace;