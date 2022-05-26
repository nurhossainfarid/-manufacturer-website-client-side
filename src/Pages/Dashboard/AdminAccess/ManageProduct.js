import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Share/Loading/Loading';

const ManageProduct = () => {
    const { data: products, isLoading } = useQuery('tools', () => fetch('https://limitless-forest-21583.herokuapp.com/products').then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='px-20 py-10'>
            <div className="text-sm breadcrumbs text-primary">
                <ul>
                    <li>DashBoard</li> 
                    <li>Manage Products</li>
                </ul>
            </div>
            <h2 className='text-5xl text-secondary font-semibold'>Manage Products</h2>
            <div className='bg-primary h-1 w-48 my-5'></div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    products.map(product =>
                        <div key={product._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure ><img className='bg-white' src={product.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl">{product.name}</h2>
                                <p>Message : {product.shotDescription}</p>
                                <p className='font-semibold text-xl'>Price : {product.price}</p>
                                <p className='text-xl font-bold'>Minimum Orders : {product.minimumQuantity}</p>
                                <p className='text-xl'>Available : {product.available}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ManageProduct;