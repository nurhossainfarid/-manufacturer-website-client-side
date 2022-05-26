import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Share/Loading/Loading';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('comments', () => fetch('https://limitless-forest-21583.herokuapp.com/reviews').then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='px-20 mb-[-100px]'>
            <h2 className='text-3xl text-center font-bold pt-10 text-white'>Customer <span className='text-primary'>Reviews</span></h2>
            <div className='bg-primary h-1 w-36 mx-auto my-5 mb-16'></div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    reviews.map(review => 
                        <div key={review._id} className="card lg:card-side bg-base-100 shadow-lg shadow-gray-200">
                            <figure>
                                <div className="avatar">
                                    <div className="w-40 ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={review.img} alt="" />
                                    </div>
                                </div>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{review.name}</h2>
                                <p>{review.comment}</p>
                                <div class="rating rating-sm">
                                    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                                </div>
                                <div className="card-actions justify-start">
                                <button className="btn btn-primary text-white hover:bg-white hover:text-primary hover:border-2 hover:border-primary hover:text-base">Visit Profile</button>
                                </div>
                            </div>
                        </div>
                    ).slice(0, 3)
                }
            </div>
        </div>
    );
};

export default Reviews;