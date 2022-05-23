import React from 'react';
import { useQuery } from 'react-query';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('comments', () => fetch('http://localhost:5000/reviews').then(res => res.json()));
    if (isLoading) {
        return <h2>Loading....</h2>
    }
    return (
        <div className='px-20'>
            <h2 className='text-3xl text-center font-bold py-10'>Reviews</h2>
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