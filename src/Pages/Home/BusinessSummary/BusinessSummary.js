import React from 'react';
import { FaFontAwesomeFlag, FaShoppingCart } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";


const BusinessSummary = () => {
    return (
        <section className='px-20 mt-[-200px]'>
            <h2 className='text-3xl text-center font-bold pt-10'> Business <span className='text-primary'>Summary</span> </h2>
            <div className='bg-primary h-1 w-36 mx-auto my-5 mb-10'></div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-16 bg-white pl-10 md:pb-10'>
                <div>
                    <FaFontAwesomeFlag className='text-8xl text-primary mb-5'></FaFontAwesomeFlag>
                    <div className="indicator">
                        <span className="indicator-item text-3xl font-bold ml-2">+</span> 
                        <h4 className='text-5xl font-semibold mb-2'>35</h4>
                    </div>
                    <h1 className='text-xl'>Countries</h1>
                </div>
                <div>
                    <BsPeopleFill className='text-8xl text-primary mb-5'></BsPeopleFill>
                    <div className="indicator">
                        <span className="indicator-item text-3xl font-bold text-primary">+</span> 
                        <h4 className='text-5xl font-semibold mb-2'>100</h4>
                    </div>
                    <h1 className='text-xl'>Happy Customers</h1>
                </div>
                <div>
                    <MdMessage className='text-8xl text-primary mb-5'></MdMessage>
                    <div className="indicator">
                        <span className="indicator-item text-3xl font-bold text-primary">+</span> 
                        <h4 className='text-5xl font-semibold mb-2'>150</h4>
                    </div>
                    <h1 className='text-xl'>Reviews</h1>
                </div>
                <div>
                    <FaShoppingCart className='text-8xl text-primary mb-5'></FaShoppingCart>
                    <div className="indicator">
                        <span className="indicator-item text-3xl font-bold ml-2">+</span> 
                        <h4 className='text-5xl font-semibold mb-2'>75</h4>
                    </div>
                    <h1 className='text-xl'>Products</h1>
                </div>
            </div>
        </section>
    );
};

export default BusinessSummary;