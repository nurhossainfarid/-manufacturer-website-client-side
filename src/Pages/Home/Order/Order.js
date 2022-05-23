import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const Order = () => {
    const { orderId } = useParams();
    console.log(orderId);
    const [order, setOrder] = useState({});

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    useEffect(() => {
        fetch(`http://localhost:5000/order/${orderId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrder(data)
            })
    }, []);

    return (
        <div>
            <div class="card w-1/2 bg-base-100 shadow-xl mx-auto">
                <figure><img src={order.img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-3xl pb-3">Product-Name : {order.name}</h2>
                    <form className='grid grid-cols-1 gap-3' onSubmit={handleSubmit(onSubmit)}>
                        <label className='text-xl' htmlFor="#buyer">Your Name : </label>
                        <input id='buyer' className='border-2 text-2xl border-gray-300 rounded px-3 py-2' type='text' {...register("buyer")} />
                        <label className='text-xl' htmlFor="#email">Your Email : </label>
                        <input id='email' className='border-2 text-2xl border-gray-300 rounded px-3 py-2' type='email' {...register("email")} />
                        <label className='text-xl' htmlFor="#mobile">Your Number : </label>
                        <input id='mobile' className='border-2 text-2xl border-gray-300 rounded px-3 py-2' type='tel' {...register("phone")} />
                        <label className='text-xl' htmlFor="#address">Your Address : </label>
                        <textarea name="address" id="address" className='border-2 text-2xl border-gray-300 rounded px-3 py-2' cols="30" rows="2"></textarea>
                        <label className='text-xl' htmlFor="#quantity">Quantity : </label>         
                        <input id='quantity' className='border-2 text-2xl border-gray-300 rounded px-3 py-2' type="number" {...register("quantity", { min: `${order?.minimumQuantity}`, max: `${order?.available}` })} />
                        <input type="submit" className='btn btn-primary hover:bg-black border-0 text-white  hover:text-xl text-lg w-32' value={'Confirm'} />
                        <div class="card-actions justify-end">
                            <label for="order-details-modal" class="btn modal-button">Product Details</label>
                        </div>
                        
                        {/* <!-- The button to open modal --> */}
                        <input type="checkbox" id="order-details-modal" class="modal-toggle" />
                        <div class="modal">
                        <div class="modal-box relative">
                            <label for="order-details-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <img src={order.img} alt="" />
                            <h3 class="font-bold text-3xl">Product Name : {order.name}</h3>
                            <p class="pt-4 text-xl">Message : {order.shotDescription}</p>
                            <p class="pt-1 text-2xl font-bold">Minimum {order.minimumQuantity>1? 'Orders': 'Order'} : {order.minimumQuantity}</p>
                            <p class="pt-1 text-2xl">Available : {order.available}</p>
                            <p class="pt-1 text-2xl">Per Price : <span className='text-primary'>{order.price}</span></p>
                        </div>
                        </div>
                    </form>
                </div>
                </div>
        </div>
    );
};

export default Order;