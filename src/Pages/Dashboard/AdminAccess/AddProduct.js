import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const product = {
            product: data.name,
            shotDescription: data.shotDescription,
            minimumQuantity: data.minimumQuantity,
            available: data.available,
            price: data.price,
        }

        fetch('http://localhost:5000/products', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    };
    return (
        <div className='pl-5 my-5 pb-5'>
            <div className="text-sm breadcrumbs text-primary">
                <ul>
                    <li>DashBoard</li> 
                    <li>Add A Product</li>
                </ul>
            </div>
            <h2 className='text-5xl text-secondary font-semibold'>Add A Product</h2>
            <div className='bg-primary h-1 w-48 my-5'></div>
            <div className="card w-1/2 mx-auto bg-base-100 shadow-xl">
                <div className="card-body">
                <form className='grid grid-cols-2 gap-y-3' onSubmit={handleSubmit(onSubmit)}>
                        <label className='text-xl' htmlFor="#buyer">Product Name : </label>
                        <input id='buyer'  className='border-2 text-2xl border-gray-300 rounded px-3 py-2' type='text' {...register("buyer")} d />

                        <label className='text-xl' htmlFor="#message">Short Description : </label>
                        <input id='message' className='border-2 text-2xl border-gray-300 rounded px-3 py-2' type='text' {...register("shotDescription")} />

                        <label className='text-xl' htmlFor="#minimum">Minimum Quantity : </label>
                        <input id='minimum' name='minimumQuantity' className='border-2 text-2xl border-gray-300 rounded px-3 py-2' type='number' {...register("minimumQuantity")} />

                        <label className='text-xl' htmlFor="#available">Available : </label>
                        <input id='available' name='minimumQuantity' className='border-2 text-2xl border-gray-300 rounded px-3 py-2' type='number' {...register("minimumQuantity")} />

                        <label className='text-xl' htmlFor="#quantity">Quantity : </label>         
                        <input id='quantity' name='quantity' className='border-2 text-2xl border-gray-300 rounded px-3 py-2' type="number" {...register("quantity")} />

                        <label className='text-xl' htmlFor="#price">Price : </label>         
                        <input id='price' name='price' className='border-2 text-2xl border-gray-300 rounded px-3 py-2' type="number" {...register("price")} />

                        <label className='text-xl' htmlFor="#image">Image : </label>         
                        <input id='image' name='img' className='border-2 text-2xl border-gray-300 rounded px-3 py-2' type="number" {...register("img")} />
                        
                        <input type="submit" className='btn btn-primary hover:bg-black border-0 text-white  hover:text-xl text-lg w-40 justify-end' value={'Add Product'} />
                    </form>
                    </div>
                </div>
        </div>
    );
};

export default AddProduct;