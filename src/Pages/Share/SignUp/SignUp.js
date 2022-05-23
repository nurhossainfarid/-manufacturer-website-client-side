import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const SignUp = () => {
     // sign in with google
    // const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    //     // sign in with email and password

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    
    const { register,formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
    console.log(data);
        createUserWithEmailAndPassword(data.email, data.password)
    }
    let signInError;
    if (error ) {
        signInError = <p className='text-red-500 mb-2'><small>{error?.message}</small></p>
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto md:mt-32">
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">Sign up</h2>
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
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>

                    {/* password */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input type="password" className="input input-bordered w-full max-w-xs"
                            {...register("password", { 
                                required: {
                                    value: true,
                                    message: "Password is require"
                                  },
                                minLength: {
                                    value: 6,
                                    message: 'Must be use 6 characters password'
                                }
                             })} />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>

                    {/* password */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Phone</span>
                        </label>
                        <input type="tel" className="input input-bordered w-full max-w-xs"
                            {...register("phone", { 
                                required: {
                                    value: true,
                                    message: "Phone is require"
                                  }
                             })} />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>
                    {signInError}
                    <input className='btn w-full max-w-xs' type="submit" value="Login" />
                    <p>New to .carBro???? <Link to={'/login'}><small className='text-secondary'>Create new account</small></Link></p>
                </form>
            </div>    
        </div>
    )
};

export default SignUp;