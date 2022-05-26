import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Share/Loading/Loading';
import CarBroProduct from '../CarBroProduct/CarBroProduct';

const CarBroProducts = () => {
    const { data: products, isLoading, refetch } = useQuery('tools', () => fetch('https://limitless-forest-21583.herokuapp.com/products').then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='px-20 mb-40 md:mb-60'>
            <h2 className='text-3xl text-center font-bold pt-10'> Products</h2>
            <div className='bg-primary h-1 w-36 mx-auto my-5 mb-16'></div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0'>
                {
                    products.map(product => <CarBroProduct key={product._id} product={product} refetch={refetch}></CarBroProduct>).slice(0, 6)
                }
            </div>
        </div>
    );
};

export default CarBroProducts;