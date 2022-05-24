import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey = '4b59068e70b6c045448e7caa48248aec';
    
    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        


        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData,
        })
        .then(res => res.json())
        .then(result => {
            if (result.success) {
                const docImg = result.data.url;
                const review = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    img: docImg
                }

                // send to server
                fetch('http://localhost:5000/comments', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(review)
                })
                .then(res => res.json())
                .then(inserted => {
                    if (inserted.insertedId) {
                        toast.success('Comment added successfully')
                        reset();
                    }
                    else {
                        toast.error('Failed to add Comment')
                    }
                })
            }
        })
    };
    return (
        <div className='pl-5 h-screen'>
            <div className="text-sm breadcrumbs text-primary">
                <ul>
                    <li>DashBoard</li> 
                    <li>Add A Review</li>
                </ul>
            </div>
            <h2 className='text-5xl text-secondary font-semibold'>Add A Review</h2>
            <div className='bg-primary h-1 w-40  my-5'></div>
            <form onSubmit={handleSubmit(onSubmit)}>
                    {/* name */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Name</span>
                        </label>
                        <input type="text" className="input input-bordered w-full max-w-xs"
                            {...register("name", { 
                                required: {
                                    value: true,
                                    message: "Name is require"
                                  }
                             })} />
                        <label class="label">
                            {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

                    {/* email */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input type="email" className="input input-bordered w-full max-w-xs"
                            {...register("email", { 
                                required: {
                                    value: true,
                                    message: "Email is require"
                                  },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid email'
                                }
                             })} />
                        <label class="label">
                            {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>
                
                    {/* comment */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Comment</span>
                        </label>
                        <input type="text" className="input input-bordered w-full max-w-xs"
                            {...register("comment", { 
                                required: {
                                    value: true,
                                    message: "Comment is require"
                                  },
                             })} />
                        <label class="label">
                            {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>

                    {/* photo */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Photo</span>
                        </label>
                        <input type="file" className="input input-bordered w-full max-w-xs"
                            {...register("image", { 
                                required: {
                                    value: true,
                                    message: "image is require"
                                }
                            })} />
                        <label class="label">
                            {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>
                    <input className='btn w-full max-w-xs' type="submit" value="ADD" />
                </form>
        </div>
    );
};

export default AddReview;