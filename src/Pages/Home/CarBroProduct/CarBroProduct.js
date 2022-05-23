import React from 'react';
import './CarBroProduct.css';

const CarBroProduct = ({ product }) => {
    const { name, img, minimumQuantity, available, price, shotDescription } = product;
    return (
        <div>
            <div className="card bg-base-100 h-full rounded-none shadow-xl hover:bg-black hover:text-white pt-10 border-2 border-gray-300">
                <figure ><img className='bg-white' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{name}</h2>
                    <p>Message : {shotDescription}</p>
                    <p className='font-semibold text-xl font-semibold'>Price : {price}</p>
                    <p className='text-xl font-bold'>Minimum Orders : {minimumQuantity}</p>
                    <p className='text-xl'>Available : {available}</p>
                    <div className="divider"></div> 
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary hover:bg-white text-white hover:scale-150 hover:text-black">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarBroProduct;