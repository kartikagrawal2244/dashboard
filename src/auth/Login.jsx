
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import './Auth.css';


function Login() {

    const [eye, setEye] = useState(false);
    const [auth, setAuth] = useState(
        {
            email: "",
            password: ""
        }
    );

    const [error, setError] = useState(null);

    const Navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setAuth((prevAuth) => ({
            ...prevAuth,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        if (!passwordRegex.test(auth.password)) {
            setError('Minimum eight characters, at least one letter, one number and one special character');
            return;
        }

        localStorage.setItem('userCredentials', JSON.stringify(auth));
        alert('Login successful');
        Navigate('/dashboard');
    };


    return (
        <div className='py-20 lg:px-0 px-7'>
            <div className='max-w-6xl mx-auto my-auto shadow rounded-lg grid lg:grid-cols-2 gap-20'>
                <div className='bg-[#27292b] rounded-ss-lg rounded-bl-lg py-28 px-6'>
                    <div className='border-b border-[#4b5973] mb-14'>
                        <div className='px-7 mb-20'>
                            <h2 className='text-white text-2xl font-semibold mb-7'>Lorem ipsum dolor sit amet</h2>

                            <div className="signup-miniblock flex items-center">
                                <div className="">
                                    <img src="/assets/images/signup-icon-one.svg" alt="assured regulation" />
                                </div>

                                <div className="ms-2">
                                    <h5 className='text-white font-medium text-base'>Assured Regulation</h5>
                                    <p className='text-white font-medium text-sm opacity-[0.6] my-1'>Feel secure with a trusted provider.</p>
                                </div>
                            </div>

                            <div className="signup-miniblock flex items-center">
                                <div className="">
                                    <img src="/assets/images/signup-icon-one.svg" alt="assured regulation" />
                                </div>

                                <div className="ms-2">
                                    <h5 className='text-white font-medium text-base'>Assured Regulation</h5>
                                    <p className='text-white font-medium text-sm opacity-[0.6] my-1'>Feel secure with a trusted provider.</p>
                                </div>
                            </div>

                            <div className="signup-miniblock flex items-center">
                                <div className="">
                                    <img src="/assets/images/signup-icon-one.svg" alt="assured regulation" />
                                </div>

                                <div className="ms-2">
                                    <h5 className='text-white font-medium text-base'>Assured Regulation</h5>
                                    <p className='text-white font-medium text-sm opacity-[0.6] my-1'>Feel secure with a trusted provider.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center items-center'>
                        <img src="/assets/images/msecb-iso.svg" alt="" />

                        <div className='ms-5'>
                            <h6 className='text-white font-semibold text-2xl mb-[5px]'>ISO/IEC 27001:2013</h6>
                            <p className='text-white font-normal text-base'>Exclusive Markets ISO Certified by MSECB</p>
                        </div>
                    </div>
                </div>

                <div className='w-5/6 lg:my-auto lg:mx-0 mx-auto mb-6'>
                    <h3 className='text-[26px] leading-9 mb-5 text-[#1d1d1b] uppercase font-bold'>Login to Client Portal</h3>

                    <form action="" onSubmit={handleSubmit}>
                        <div className='mb-4'>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder='Email'
                                required
                                className='w-full focus:outline-none border rounded-lg border-[#dddddd] text-[#495057] text-base font-normal py-2 px-3'
                                onChange={handleChange}
                                value={auth.email}
                            />
                        </div>

                        <div className='mb-4'>
                            <div className='relative'>
                                <input
                                    type={eye ? "text" : "password"}
                                    name="password"
                                    id="password"
                                    placeholder='Password'
                                    required
                                    className='w-full focus:outline-none border rounded-lg border-[#dddddd] text-[#495057] text-base font-normal py-2 px-3'
                                    onChange={handleChange}
                                    value={auth.password}
                                />
                                <div className='absolute right-2 top-4 cursor-pointer' onClick={() => setEye(!eye)}>
                                    {eye ?
                                        <FaRegEye />
                                        :
                                        <FaRegEyeSlash />
                                    }
                                </div>
                            </div>
                        </div>

                        {error && (
                            <div className='text-red-500 mb-4'>
                                <p>{error}</p>
                            </div>
                        )}

                        <div className='text-end mb-4'>
                            <Link to="/" className='text-[#1d1d1b] text-end font-semibold capitalize'>Forget password?</Link>
                        </div>

                        <button type='submit' className='py-4 px-12 rounded-[5px] text-base font-medium transition-all bg-[#4ba4db] text-white ease-in-out duration-[0.5s] w-full uppercase mb-4'>Log in</button>
                    </form>

                    <div className='text-center'>
                        <p className='text-[#1d1d1b] font-semibold'>
                            Not a client yet?&nbsp;
                            <Link to="/signup" className='text-[#4ba4db] underline text-end capitalize'>Open an Account</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login