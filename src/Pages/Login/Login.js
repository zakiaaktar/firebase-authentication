import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleLogin = data => {
        console.log(data);
    }


    return (
        <div className='h-[800px] flex justify-center items-center -mt-20'>
            <div className='w-96 p-7 shadow-2xl'>
                <h2 className="text-2xl text-center text-red-700 font-bold">Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password Address is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' },
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                        {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                    </div>


                    <input className='btn px-6 py-3 border-none bg-red-700 w-full mt-2 font-bold cursor-pointer' value="Login" type="submit" />
                    {/* <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div> */}
                </form>
                <p className='mt-2'>New to firebase Authentication <Link to='/signup' className='text-red-700 font-bold'>Create new account</Link></p>
                <div className="divider">OR</div>
                {/* <button className='btn btn-outline w-full text-red-700'>CONTINUE WITH GOOGLE</button> */}
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;