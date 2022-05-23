import React from 'react';
import { FaFontAwesomeFlag, FaShoppingCart } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";

const BusinessSummary = () => {
    return (
        <section className='px-28'>
            <h2 className='text-3xl text-center font-bold py-10'> Business Summary</h2>
            <div className='grid grid-cols-4 gap-16'>
                <div>
                    <FaFontAwesomeFlag className='text-8xl text-primary mb-5'></FaFontAwesomeFlag>
                    <div class="indicator">
                        <span class="indicator-item text-3xl font-bold ml-2">+</span> 
                        <h4 className='text-5xl font-semibold mb-2'>35</h4>
                    </div>
                    <h1 className='text-xl'>Countries</h1>
                </div>
                <div>
                    <BsPeopleFill className='text-8xl text-primary mb-5'></BsPeopleFill>
                    <div class="indicator">
                        <span class="indicator-item text-3xl font-bold text-primary">+</span> 
                        <h4 className='text-5xl font-semibold mb-2'>100</h4>
                    </div>
                    <h1 className='text-xl'>Happy Customers</h1>
                </div>
                <div>
                    <MdMessage className='text-8xl text-primary mb-5'></MdMessage>
                    <div class="indicator">
                        <span class="indicator-item text-3xl font-bold text-primary">+</span> 
                        <h4 className='text-5xl font-semibold mb-2'>150</h4>
                    </div>
                    <h1 className='text-xl'>Reviews</h1>
                </div>
                <div>
                    <FaShoppingCart className='text-8xl text-primary mb-5'></FaShoppingCart>
                    <div class="indicator">
                        <span class="indicator-item text-3xl font-bold ml-2">+</span> 
                        <h4 className='text-5xl font-semibold mb-2'>75</h4>
                    </div>
                    <h1 className='text-xl'>Products</h1>
                </div>
            </div>
        </section>
    );
};

export default BusinessSummary;