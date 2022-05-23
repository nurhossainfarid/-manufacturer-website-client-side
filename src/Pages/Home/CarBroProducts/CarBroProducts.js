import React from 'react';
import { useQuery } from 'react-query';
import CarBroProduct from '../CarBroProduct/CarBroProduct';

const CarBroProducts = () => {
    const { data: products, isLoading } = useQuery('tools', () => fetch('http://localhost:5000/products').then(res => res.json()));
    if (isLoading) {
        return <h2>Loading....</h2>
    }
    return (
        <div className='px-20'>
            <h2 className='text-3xl text-center font-bold py-10'> Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                {
                    products.map(product => <CarBroProduct key={product._id} product={product}></CarBroProduct>).slice(0, 6)
                }
            </div>
        </div>
    );
};

export default CarBroProducts;