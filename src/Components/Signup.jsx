import React, { useState } from 'react'
import authService from '../appwrite/auth.js'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';


function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");

    const create = async (data) => {
        setError("");
        try {
            await authService.createAccount(data);
            const userData = await authService.getCurrentUser();
            if (userData) {
                dispatch(login({ userData }));
                navigate('/');
            }
        } catch (error) {
            setError(error.message);
            dispatch(authError(error.message));
        }
    };


    return (
        <div className="flex items-center px-3 justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-300 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>

                {error && <p className='text-red-600 mt-8 text-center'>{error.message}</p>}
                <form onSubmit={handleSubmit(create)}>
                    {/* //if you want then cross check handle submit:handleSubmit(signUp) */}
                    <div className='space-y-5'>
                        <Input
                            label="Name: "
                            placeholder="Enter Your fullname"
                            {...register("name", {
                                required: true
                            })}
                        />
                        <Input
                            label="Email: "
                            placeholder="Enter Your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label="password: "
                            placeholder="Enter Your password"
                            type="password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Button type='submit' className='w-full'>
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
