import React from 'react';

const ProductControl = ({ product , setDeletingProduct}) => {
    const { img, name, price, shotDescription, available, minimumQuantity } = product;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure ><img className='bg-white' src={img} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title text-2xl">{name}</h2>
            <p>Message : {shotDescription}</p>
            <p className='font-semibold text-xl'>Price : ${price}</p>
            <p className='text-xl font-bold'>Minimum Orders : {minimumQuantity}</p>
            <p className='text-xl'>Available : {available}</p>
            <div className="card-actions justify-end">
            <label onClick={() => setDeletingProduct(product)} for="doctor-delete-modal" class="btn btn-error">Delete</label>
            </div>
        </div>
    </div>
    );
};

export default ProductControl;