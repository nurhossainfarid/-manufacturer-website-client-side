import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import CarBroProducts from './CarBroProducts/CarBroProducts';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div className='pb-10'>
            <Banner></Banner>
            <CarBroProducts></CarBroProducts>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;<h3>Home pages</h3>