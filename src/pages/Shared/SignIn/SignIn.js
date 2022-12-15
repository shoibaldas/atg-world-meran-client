import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signinError, setsigninError] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const handleToggleShowPassword = () => setShowPassword(!showPassword)




    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='w-80 p-7'>
                <h2 className='text-center text-2xl font-semibold'>Login</h2>
                <form onSubmit={handleSubmit()}>
                    <div className='form-control flex flex-col w-full max-w-xs'>
                        <label className='label'><span className='label-text font-semibold'>Email <span className='text-red-500'>*</span></span></label>
                        <input type="email" {...register("email", { required: "Email is required" })} placeholder='Your email' className='rounded-md mt-2 py-1 px-2 border border-gray-500' />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className='relative form-control mt-2 flex flex-col w-full max-w-xs'>
                        <label className='label'><span className='label-text font-semibold'>Password <span className='text-red-500'>*</span></span></label>
                        <input type={showPassword ? "text" : "password"} {...register("password", { required: "Password is required", minLength: { value: 6, message: 'Password must be minimum 6 characters' } })} placeholder='Password' className='mt-2 rounded-md py-1 px-2 border border-gray-500' />

                        <div className='absolute bottom-[6.5px] right-1 cursor-pointer' onClick={handleToggleShowPassword}>
                            {showPassword ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>
                            ) : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            )}
                        </div>

                    </div>
                    <label className='label-text text-sm cursor-pointer underline underline-offset-1'>Forget Password?</label>
                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    <input type="submit" value='Login' className='mt-6 cursor-pointer font-semibold text-white w-full max-w-xs bg-green-600 hover:bg-green-700 p-2 rounded-md' />
                    {signinError && <p className='text-red-600'>{signinError}</p>}
                    <div className='text-center'>
                        <label className='label-text text-sm'>Don't have an account? <Link to='/signup' className='cursor-pointer font-semibold text-green-900 underline'>Create Account</Link></label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;