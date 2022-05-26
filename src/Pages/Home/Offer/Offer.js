import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Share/Loading/Loading';

const Offer = () => {
    const { data: offer, isLoading } = useQuery('hot event', () => fetch('https://limitless-forest-21583.herokuapp.com/offer').then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='px-20 mt-32'>
            <h2 className='text-3xl text-center font-bold pt-10'> Hot <span>Event</span></h2>
            <div className='bg-primary h-1 w-36 mx-auto my-5 mb-10'></div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    offer.map(o =>
                    <div className="card bg-base-100 shadow-xl">
                    <figure><img className='relative' src={o.img} alt="Shoes" /><span className="badge badge-lg border-none bg-primary absolute inset-2 text-xl text-white">-50%</span></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">
                            {o.name}
                        </h2>
                        <p>Time is too much limited!!!! So, buy now....</p>
                        <h1 className='grid grid-cols-2 text-3xl pb-5'><p className='font-bold'>${(o.price) / 2}</p> <del className='text-primary'>${o.price}</del></h1>     
                        <div className="rating gap-1">
                            <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" checked />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
                        </div>
                        <div className="card-actions justify-end">
                        <div className="btn btn-primary text-xl text-white">View</div>
                        </div>
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default Offer;