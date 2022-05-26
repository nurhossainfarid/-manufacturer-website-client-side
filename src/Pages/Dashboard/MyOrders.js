import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Share/Loading/Loading';
import OrdersRow from './OrdersRow';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`http://localhost:5000/orders?email=${user?.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        console.log(res);
        return res.json();
    }));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='pl-5 h-screen my-5'>
            <div className="text-sm breadcrumbs text-primary">
                <ul>
                    <li>DashBoard</li> 
                    <li>My Orders</li>
                </ul>
            </div>
            <h2 className='text-5xl text-secondary font-semibold'>My Orders</h2>
            <div className='bg-primary h-1 w-48 my-5'></div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Payment</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <OrdersRow key={order._id} myOrder={order} index={index} refetch={refetch}></OrdersRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;