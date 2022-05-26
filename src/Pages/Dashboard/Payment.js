import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Share/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1uAYJ7SJwY59o3siZB9QzmWGunOMN5G1LnREgklsuL9uGUQklPbPoIRKeI2mOYVJFseDQOCoigwo0lI0EetVnx00zFnvaXDg');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/orders/${id}`;

    const { data: payment, isLoading } = useQuery('orders', () => fetch(url, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className="text-success font-bold">Hello, {payment?.userName}</p>
                    <h2 className="card-title">Please Pay for {payment?.Order}</h2>
                    <p>Please pay: ${payment?.totalAmount}</p>
                </div>
            </div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                <Elements stripe={stripePromise}>
                    <CheckoutForm payment={payment} />
                </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;