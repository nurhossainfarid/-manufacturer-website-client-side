import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Share/Loading/Loading';

const Brands = () => {
    const { data: brands, isLoading } = useQuery('brands', () => fetch('https://limitless-forest-21583.herokuapp.com/brands').then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <section className='p-20 pt-0'>
            <h2 className='text-3xl text-center font-bold pt-10'> Available <span className='text-primary'>Brands</span></h2>
            <div className='bg-primary h-1 w-36 mx-auto my-5 mb-10'></div>
            <div className='grid gird-cols-2 md:grid-cols-6'>
                {
                    brands.map(brand => <div className='border-x border-y border-gary-200'>
                        <img className='w-full hover:scale-125' src={brand.img} alt="" />
                    </div>)
                }
            </div>
        </section>
    );
};

export default Brands;