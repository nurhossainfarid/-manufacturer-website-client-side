import React from 'react';
import Banner from './Banner/Banner';
import Brands from './Brands/Brands';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import CarBroProducts from './CarBroProducts/CarBroProducts';
import Offer from './Offer/Offer';
import Reviews from './Reviews/Reviews';
import bg1 from '../../images/bg-151.jpg'

const Home = () => {
    return (
        <div className='pb-10'>
            <Banner></Banner>
            <div className='grid grid-cols-1 gap-20'>
                <CarBroProducts></CarBroProducts>

                <div style={{
                    backgroundImage: `url(${bg1})`
                }}>
                    <BusinessSummary></BusinessSummary>
                    <Reviews></Reviews>  
                </div>

                <Offer></Offer>
                <div></div>
                <Brands></Brands>
            </div>
        </div>
    );
};

export default Home;<h3>Home pages</h3>