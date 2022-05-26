import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Share/Loading/Loading';
import DeleteModal from '../DeleteModal';
import ProductControl from './ProductControl';

const ManageProduct = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);

    const { data: products, isLoading, refetch } = useQuery('tools', () => fetch('https://limitless-forest-21583.herokuapp.com/products').then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='py-10'>
            <div className="text-sm breadcrumbs text-primary">
                <ul>
                    <li>DashBoard</li> 
                    <li>Manage Products</li>
                </ul>
            </div>
            <h2 className='text-5xl text-secondary font-semibold'>Manage Products</h2>
            <div className='bg-primary h-1 w-48 my-5'></div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {
                    products.map(product =>
                        <ProductControl key={product._id} product={product} setDeletingProduct={setDeletingProduct}></ProductControl>
                    )
                }
            </div>
            {
                deletingProduct && <DeleteModal
                    deletingProduct={deletingProduct}
                    refetch={refetch}
                    setDeletingProduct={setDeletingProduct}
                ></DeleteModal>
            }
        </div>
    );
};

export default ManageProduct;