import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Share/Loading/Loading';
import AllOrdersRow from './AllOrdersRow';

const ManageAllOrders = () => {
    const { data: orders, isLoading, refetch } = useQuery('manage orders', () => fetch('http://localhost:5000/orders', {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    };

    return (
        <div className='pl-5 h-screen my-5'>
            <div className="text-sm breadcrumbs text-primary">
                <ul>
                    <li>DashBoard</li> 
                    <li>Manage All Orders</li>
                </ul>
            </div>
            <h2 className='text-5xl text-secondary font-semibold'>Mange All Orders</h2>
            <div className='bg-primary h-1 w-48 my-5'></div>
            <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Users</th>
                        <th>Email</th>
                        <th>Product Name</th>
                        <th>Total Amount</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Payment</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <AllOrdersRow key={order._id} ord={order} index={index} refetch={refetch} ></AllOrdersRow>)
                        }
                    </tbody>
            </table>
        </div>
    );
};

export default ManageAllOrders;