import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const Order = () => {
    const [user] = useAuthState(auth);
    const { orderId } = useParams();
    const [orders, setOrders] = useState({});

    const { register, handleSubmit } = useForm();

    useEffect(() => {
        fetch(`http://localhost:5000/order/${orderId}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [user]);

    const onSubmit = data => {
        console.log(data);
        const order = {
            orderId: orders._id,
            Order: orders.name,
            userEmail: user?.email,
            userName: user?.displayName,
            quantity: data.quantity,
            totalAmount: parseFloat(orders.price) * parseInt(data.quantity),
            phone: data.phone,
            address: data.address
        }

        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        // if (data.quantity >= order.minimumQuantity && data.quantity <= order.available) {
        //     toast('Your order is done')
        // } else {
        //     toast(`You minimum orders ${order.minimumQuantity} and can't orders ${order.available}`)
        // }
    };

    return (
        <div>
            <div className="card w-1/2 bg-base-100 shadow-xl mx-auto">
                <figure><img src={orders.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl pb-3">Product-Name : {orders.name}</h2>
                    <form className='grid grid-cols-1 gap-3' onSubmit={handleSubmit(onSubmit)}>
                        <label className='text-xl' htmlFor="#buyer">Your Name : </label>
                        <input id='buyer' value={user?.displayName} className='border-2 text-2xl border-gray-300 rounded px-3 py-2' type='text' {...register("buyer")} disabled />

                        <label className='text-xl' htmlFor="#email">Your Email : </label>
                        <input id='email' value={user?.email} className='border-2 text-2xl border-gray-300 rounded px-3 py-2' type='email' {...register("email")} disabled />

                        <label className='text-xl' htmlFor="#mobile">Your Number : </label>
                        <input id='mobile' name='phone' className='border-2 text-2xl border-gray-300 rounded px-3 py-2' type='tel' {...register("phone")} />

                        <label className='text-xl' htmlFor="#addressInfo">Your Address : </label>
                        <textarea name="address" id="addressInfo" className='border-2 text-2xl border-gray-300 rounded px-3 py-2' cols="30" rows="2" {...register("address")}></textarea>

                        <label className='text-xl' htmlFor="#quantity">Quantity : </label>         
                        <input id='quantity' name='quantity' className='border-2 text-2xl border-gray-300 rounded px-3 py-2' type="number" {...register("quantity", { min: `${orders?.minimumQuantity}`, max: `${orders?.available}` })} />
                        
                        <input type="submit" className='btn btn-primary hover:bg-black border-0 text-white  hover:text-xl text-lg w-32' value={'Confirm'} />
                        <div className="card-actions justify-end">
                            <label htmlFor="order-details-modal" className="btn modal-button">Product Details</label>
                        </div>
                        
                        {/* <!-- The button to open modal --> */}
                        <input type="checkbox" id="order-details-modal" className="modal-toggle" />
                        <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="order-details-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <img src={orders.img} alt="" />
                            <h3 className="font-bold text-3xl">Product Name : {orders.name}</h3>
                            <p className="pt-4 text-xl">Message : {orders.shotDescription}</p>
                            <p className="pt-1 text-2xl font-bold">Minimum {orders.minimumQuantity>1? 'Orders': 'Order'} : {orders.minimumQuantity}</p>
                            <p className="pt-1 text-2xl">Available : {orders.available}</p>
                            <p className="pt-1 text-2xl">Per Price : <span className='text-primary'>{orders.price}</span></p>
                        </div>
                        </div>
                    </form>
                </div>
                </div>
        </div>
    );
};

export default Order;