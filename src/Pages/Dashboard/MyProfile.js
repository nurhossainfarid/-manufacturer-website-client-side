import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [profiles, setProfile] = useState('');
    const [user] = useAuthState(auth);


    const { register, formState: { errors }, handleSubmit } = useForm();
    
    const onSubmit = async (data) => {
        console.log(data);
        const profile = {
            userName: user?.displayName,
            userPhone: data.phone,
            location: data.location,
            education: data.education,
            facebook: data.facebook
        }
            fetch(`http://localhost:5000/profile/${user?.email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(profile)
            })
                .then(res => res.json())
                .then(update => {
                    setProfile(update)
        })
        toast.success('Profile Updated successfully');
    }
    return (
        <div className='p-10 w-full h-screen'>
            <div className="text-sm breadcrumbs text-primary">
                <ul>
                    <li>DashBoard</li> 
                    <li>My Profile</li>
                </ul>
            </div>
            <h2 className='text-5xl text-secondary font-semibold'>My Profile</h2>
            <div className='bg-primary h-1 w-40  my-5'></div>
            <form className='grid grid-cols-1 md:grid-cols-2 gap-2' onSubmit={handleSubmit(onSubmit)}>
                    {/* name */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-2xl font-bold">Name</span>
                        </label>
                        <input value={user?.displayName} type="text" className="input input-bordered text-xl w-full max-w-xs"
                            {...register("name", { 
                                required: {
                                    value: true,
                                    message: "Name is require"
                                  }
                             })} />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text text-xl-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>
                    
                    {/* email */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Email</span>
                        </label>
                        <input value={user?.email} type="email" className="input input-bordered text-xl w-full max-w-xs"
                            {...register("email", { 
                                required: {
                                    value: true,
                                    message: "Email is require"
                                  }
                             })} />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text text-xl-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>
                    {/* phone */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Phone</span>
                        </label>
                        <input type="tel" className="input input-bordered text-xl w-full max-w-xs"
                            {...register("phoneNumber", { 
                                required: {
                                    value: true,
                                    message: "Phone is require"
                                  }
                             })} />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text text-xl-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>
                
                    {/* education */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Education</span>
                        </label>
                        <input  type="text" className="input input-bordered text-xl w-full max-w-xs"
                            {...register("education", { 
                                required: {
                                    value: true,
                                    message: "education is require"
                                  }
                             })} />
                    </div>
                
                    {/* location */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Location</span>
                    
                        </label>
                        <textarea className="border-2 border-gray-300 rounded text-xl w-full max-w-xs" name="" id="" cols="30" rows="2"
                            {...register("location", { 
                                required: {
                                    value: true,
                                    message: "education is require"
                                  }
                            })}>
                        </textarea>
                    </div>
                            
                    {/* facebook url */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Facebook URL</span>
                        </label>
                        <input  type="text" className="input input-bordered text-xl w-full max-w-xs"
                            {...register("facebook", { 
                                required: {
                                    value: true,
                                    message: "education is require"
                                  }
                             })} />
                    </div>
                    <input className='btn w-full max-w-xs mt-10' type="submit" value="Update Profile" />
                </form>
        </div>
    );
};

export default MyProfile;