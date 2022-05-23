import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const Login = () => {
    const navigate = useNavigate();
     // sign in with google
    const
        [
            signInWithGoogle,
            gUser,
            gLoading,
            gError
        ] = useSignInWithGoogle(auth);
    //     // sign in with email and password
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    
    const { register,formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
    }

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (user || gUser) {
        navigate('/home');
    }
    
    let signInError;
    if (error || gError ) {
        signInError = <p className='text-red-500 mb-2'><small>{error?.message}</small></p>
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto md:mt-32">
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                    {signInError}
                    <input className='btn w-full max-w-xs' type="submit" value="Login" />
                    <p>New to .carBro???? <Link to={'/signup'}><small className='text-secondary'>Create new account</small></Link></p>
                </form>
                <div className="divider">OR</div>
                <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue with Google</button>
            </div>    
        </div>
    );
};

export default Login;




// import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
// import { useForm } from 'react-hook-form';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import auth from '../../../firebase.init';
// import Loading from '../Loading/Loading';

// const Login = () => {
//     // sign in with google
//     const [
//         signInWithGoogle,
//         gUser,
//         gError,
//         gLoading
//     ] = useSignInWithGoogle(auth);

//     // sign in with email and password
//     const [
//         signInWithEmailAndPassword,
//         user,
//         loading,
//         error,
//     ] = useSignInWithEmailAndPassword(auth);
    
//     const { register, formState: { errors }, handleSubmit } = useForm();


// /*     // get token
//     const [token] = useToken(user || gUser); */


//     const onSubmit = data => {
//         console.log(data);
//         signInWithEmailAndPassword(data.email, data.password)
//     };


//     // console.log(token);
    
//     let signInError;
//     let navigate = useNavigate();
//     let location = useLocation();
//     let from = location.state?.from?.pathname || "/";

//     if (user || gUser) {
//         navigate(from, { replace: true })
//     }
 
//     if (loading || gLoading) {
//         return <Loading></Loading>
//     }


//     // problem



    
//     if (error || gError) {
//         signInError = <p className='text-red-500 mb-2'><small>{error?.message || gError?.message}</small></p>
//     }
//     return (
//         <div className="card w-96 bg-base-100 shadow-xl mx-auto md:mt-32">
//             <div className="card-body">
//                 <h2 className="text-center text-2xl font-bold">Login</h2>
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                     {/* email */}
//                     <div className="form-control w-full max-w-xs">
//                         <label className="label">
//                             <span className="label-text font-bold">Email</span>
//                         </label>
//                         <input type="email" className="input input-bordered w-full max-w-xs"
//                             {...register("email", { 
//                                 required: {
//                                     value: true,
//                                     message: "Email is require"
//                                   },
//                                 pattern: {
//                                     value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
//                                     message: 'Provide a valid email'
//                                 }
//                              })} />
//                         <label className="label">
//                             {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
//                             {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
//                         </label>
//                     </div>

//                     {/* password */}
//                     <div className="form-control w-full max-w-xs">
//                         <label className="label">
//                             <span className="label-text font-bold">Password</span>
//                         </label>
//                         <input type="password" className="input input-bordered w-full max-w-xs"
//                             {...register("password", { 
//                                 required: {
//                                     value: true,
//                                     message: "Password is require"
//                                   },
//                                 minLength: {
//                                     value: 6,
//                                     message: 'Must be use 6 characters password'
//                                 }
//                              })} />
//                         <label className="label">
//                             {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
//                             {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
//                         </label>
//                     </div>
//                     {signInError}
//                     <input className='btn w-full max-w-xs' type="submit" value="Login" />
//                     <p>New to Doctors Portal???? <Link to={'/signup'}><small className='text-secondary'>Create new account</small></Link></p>
//                 </form>
//                 <div className="divider">OR</div>
//                 {/* <p className='text-red-500'>{error?.message}</p>
//                 <p>{loading?.message}</p> */}
//                 <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue with Google</button>
//             </div>
//         </div>
//     )
// };

// export default Login;