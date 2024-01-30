import React from 'react'
import { GoShieldLock } from "react-icons/go";
import { IoWalletSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaCheckCircle } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { FaChevronRight } from "react-icons/fa";
import Card from '../coman/Card';
import { useDarkMode } from '../context/Themecontext';
import { FaRegCopyright } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";



function Home() {

    const { isDarkMode } = useDarkMode();

    return (
        <div className='px-6 my-5 relative'>
            <div className='grid xl:grid-cols-7 lg:grid-col-5 gap-6 mb-16'>
                <div className='flex lg:flex-row flex-col col-span-2 rounded shadow-lg bg-[#04a6dd] p-3'>
                    <div className='lg:mb-0 mb-6'>
                        <h5 className='text-white text-base font-bold'>Wallet Balance</h5>
                        <p className='text-white text-xl font-bold'>0.00 <sub>100</sub></p>
                    </div>

                    <div className='text-center'>
                        <GoShieldLock className='mx-auto' fontSize={120} color='#7ac8df' />

                        <p className='text-[#7ac8df] mt-2 capitalize'>Safe Wallet</p>
                    </div>
                </div>

                <div className='flex lg:flex-row flex-col col-span-3 gap-2 rounded shadow-lg bg-white p-3'>
                    <div className='m-auto'>
                        <IoWalletSharp fontSize={150} color='#04a6dd' />
                    </div>

                    <div className='m-auto'>
                        <h2 className='text-xl font-semibold text-[#00000] mb-3'>Your Wallet is empty!</h2>
                        <p className='text-sm font-medium mb-7'>Lorem ipsum dolor sit amet.</p>
                        <Link className='rounded bg-[#04a6dd] text-white py-2 px-5 text-lg font-medium'>Import Funds</Link>
                    </div>
                </div>

                <div className='rounded shadow-lg bg-[#44546b] p-3 col-span-2'>
                    <div className='flex justify-between items-center bg-[#324154] mb-6'>
                        <div className='p-2'>
                            <h4 className='text-white font-semibold text-base'>My Profile Status</h4>

                            <p className='text-[#559d68] font-medium text-base'>Test</p>
                        </div>

                        <div className='p-2'>
                            <FaCheckCircle color='#559d68' enableBackground="#ffffff" />
                        </div>
                    </div>

                    <ul className='list-disc ms-5 marker:text-[#559d68] text-white text-base font-medium relative mb-7'>
                        <li>
                            Payment Information
                            <span className='absolute top-1/4 -left-[14px] w-0.5 h-6 bg-[#559d68] transform -translate-y-1/4'></span>
                        </li>

                        <li>
                            Legal Information
                            <span className='absolute top-3/4 -left-[14px] w-0.5 h-6 bg-[#559d68] transform -translate-y-3/4'></span>
                        </li>

                        <li>
                            Document Verification
                        </li>
                    </ul>
                </div>

                <div className='col-span-5'>
                    <h4 className={`mb-2 text-lg font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>Wallet Statistics</h4>

                    <div className='flex md:flex-row flex-col justify-center items-center rounded shadow-lg bg-white px-3 py-12 text-center'>
                        <div>
                            <ImSearch fontSize={140} />
                        </div>

                        <div className='text-start ms-12'>
                            <h4 className='text-xl font-semibold mb-2'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </h4>

                            <p className='text-base font-normal'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima?
                            </p>
                        </div>
                    </div>
                </div>

                <div className='col-span-2'>
                    <h4 className={`mb-2 text-lg font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>What`s new</h4>

                    <div>
                        <img src="./assets/images/gettyimages-1235528202-612x612.jpg" alt="" />
                    </div>
                </div>

                <div className='col-span-5'>
                    <div className='flex justify-between'>
                        <h4 className={`mb-2 text-lg font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>Accounts Types</h4>
                        <Link className='text-[#04a6dd] inline-flex'>Accounts Overview <FaChevronRight className='ms-1 top-1.5 relative' />
                        </Link>
                    </div>

                    <div className='rounded bg-[#dfe4e8] p-5'>
                        <div className='grid grid-cols-2 mt-6 gap-5 gap-y-10'>
                            <div>
                                <Card />
                            </div>

                            <div>
                                <Card />
                            </div>

                            <div>
                                <Card />
                            </div>

                            <div>
                                <Card />
                            </div>
                        </div>

                        <div className='flex justify-center mt-5'>
                            <button className='rounded bg-[#04a6dd] border-2 border-[#04a6dd] text-white py-2 px-5 text-lg font-medium me-5'>Live Account</button>

                            <button className='rounded bg-transparent border-2 border-[#04a6dd] text-black py-2 px-5 text-lg font-medium'>Demat Account</button>
                        </div>
                    </div>
                </div>

                <div className='col-span-2'>
                    <img src="./assets/images/gettyimages-1479096411-612x612.jpg" alt="" className='mb-5' />

                    <img src="./assets/images/gettyimages-1701896828-612x612.jpg" alt="" />
                </div>
            </div>

            <div>
                <p className={`text-base font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>Copyright&nbsp;<FaRegCopyright className='inline' /> 2018:2024 Manufacturer PVT. LTD.</p>
            </div>

            <div className={`fixed z-50 right-14 bottom-5 ${isDarkMode ? 'bg-white' : 'bg-black'} rounded-full h-14 w-14 `}>
                <TiMessages fontSize={30} color={`${isDarkMode ? '#000000' : '#ffffff'}`} className='mx-auto mt-3' />
            </div>
        </div>
    )
}

export default Home