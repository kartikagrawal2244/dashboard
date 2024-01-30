import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { AiFillPieChart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { FaHandshake } from 'react-icons/fa';
import { RiRefund2Line } from "react-icons/ri";
import { IoWallet } from "react-icons/io5";
import HamburgerButton from '../component/HamburgerMenuButton/HamburgerButton';
import { Disclosure } from '@headlessui/react';
import { LuBadgePercent } from "react-icons/lu";
import { PiTrafficSignalFill } from "react-icons/pi";
import { FaCentercode } from "react-icons/fa";
import { MdSwitchAccount, MdCollectionsBookmark } from "react-icons/md";
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useDarkMode } from '../context/Themecontext';
import { IoLogoPinterest } from "react-icons/io";
import { IoMdHelpCircleOutline } from "react-icons/io";



const Sidebar = () => {
  const [arrow, setArrow] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);
  const { isDarkMode } = useDarkMode();
  const location = useLocation();

  const Menus = [
    { title: 'Dashboard', path: '/dashboard', src: <AiFillPieChart color={`${isDarkMode ? '#ffffff' : '#000000'}`} /> },

    {
      title: 'My Wallet', path: '/dashboard/mywallet', src: <IoWallet color={`${isDarkMode ? '#ffffff' : '#000000'}`} />,
      hasDropdown: true,
      dropdown: [
        { title: 'Add Product', path: '/dashboard/addproduct' },
        { title: 'Edit Product', path: '/dashboard/editproduct' },
        { title: 'Delete Product', path: '/dashboard/deleteproduct' },
      ],
    },
    { title: 'My Accounts', path: '/dashboard/account', src: <MdSwitchAccount color={`${isDarkMode ? '#ffffff' : '#000000'}`} /> },

    { title: 'Funds', path: '/dashboard/funds', src: <RiRefund2Line color={`${isDarkMode ? '#ffffff' : '#000000'}`} /> },

    { title: 'Permotions', path: '/dashboard/permotions', src: <LuBadgePercent color={`${isDarkMode ? '#ffffff' : '#000000'}`} /> },

    { title: 'Social Trading', path: '/dashboard/socialtrading', src: <MdCollectionsBookmark color={`${isDarkMode ? '#ffffff' : '#000000'}`} /> },
    {
      title: 'Become Partner', path: '/dashboard/becomepartner', src: <FaHandshake color={`${isDarkMode ? '#ffffff' : '#000000'}`} />
    },
    {
      title: 'My Profile', path: '/dashboard/myprofile', src: <CgProfile color={`${isDarkMode ? '#ffffff' : '#000000'}`} />
    },
    {
      title: 'Trading Platforms', path: '/dashboard/tradingplatforms', src: <PiTrafficSignalFill color={`${isDarkMode ? '#ffffff' : '#000000'}`} />
    },
    {
      title: 'Trading Central', path: '/dashboard/tradingcentral', src: <FaCentercode color={`${isDarkMode ? '#ffffff' : '#000000'}`} />
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <>
      <div
        className={`${arrow ? 'w-2/4' : 'w-fit'
          } hidden sm:block relative h-screen overflow-y-auto scroll-smooth duration-300  ${isDarkMode ? 'bg-black' : 'bg-white'} border-r ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} p-5`}
      >
        <BsArrowLeftCircle
          className={`${!arrow && 'rotate-180'
            } absolute text-3xl ${isDarkMode ? 'bg-black' : 'bg-white'} ${isDarkMode ? 'fill-[#ffffff]' : 'fill-[#000000]'}  rounded-full cursor-pointer top-3 right-2`}
          onClick={() => setArrow(!arrow)}
        />
        <Link to='/'>
          <div className={`flex ${arrow && 'gap-x-4'} items-center`}>
            <IoLogoPinterest fontSize={35} color={`${isDarkMode ? '#ffffff' : '#000000'}`} />
            {arrow && (
              <span className={`text-xl font-medium whitespace-nowrap ${isDarkMode ? 'text-white' : 'text-black'}`}>
                Pinterest
              </span>
            )}
          </div>
        </Link>

        <ul className='pt-6 pb-10 border-b'>
          {Menus.map((menu, index) => (
            <>
              {menu.hasDropdown ? (
                <Disclosure as='li' className='relative' key={index}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className={`flex items-center w-full gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer ${isDarkMode ? 'text-white' : 'text-black'} hover:bg-gray-200 $ hover:text-black`}>
                        <span className='text-2xl'>{menu.src}</span>
                        <span className={`${!arrow && 'hidden'
                          } origin-left duration-300 flex items-center justify-between w-full`}>
                          {menu.title}
                          <div>
                            <ChevronDownIcon
                              className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                              aria-hidden="true"
                            />
                          </div>
                        </span>
                      </Disclosure.Button>

                      <Disclosure.Panel className='space-y-2 pt-2'>
                        {menu.dropdown &&
                          menu.dropdown.map((submenu, subIndex) => (
                            <Link to={submenu.path} key={subIndex} >
                              <li className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer ${isDarkMode ? 'text-white' : 'text-black'} hover:bg-gray-200
hover:text-black ${location.pathname === submenu.path && 'bg-gray-200'} ${location.pathname === submenu.path && isDarkMode && 'text-black'} `} >
                                <span className={`${!arrow && 'hidden'
                                  } block p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 ps-14`}>
                                  {submenu.title}
                                </span>
                              </li>
                            </Link>
                          ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ) : (
                <Link to={menu.path} key={index}>
                  <li
                    className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer ${isDarkMode ? 'text-white' : 'text-black'} hover:bg-gray-200 ${location.pathname === menu.path &&
                      'bg-gray-200'
                      } hover:text-black ${location.pathname === menu.path && isDarkMode && 'text-black'}`}
                  >
                    <span className='text-2xl'>{menu.src}</span>
                    <span
                      className={`${!arrow && 'hidden'
                        } origin-left duration-300 hover:block`}
                    >
                      {menu.title}
                    </span>
                  </li>
                </Link >
              )}
            </>
          ))}
        </ul>


        <div className='pt-4'>
          <p> <IoMdHelpCircleOutline className='inline me-1' />
            Need Help? <Link className='text-[#04a6dd] underline'>Contact Support</Link></p>


        </div>

      </div>

      {/* Mobile Menu */}
      <div className="pt-3" >
        <HamburgerButton
          setMobileMenu={setMobileMenu}
          mobileMenu={mobileMenu}
        />
      </div>

      <div className="sm:hidden">
        <div
          className={`${mobileMenu ? 'flex' : 'hidden'
            } absolute z-50 flex-col items-center self-end py-8 mt-16 space-y-6 font-bold sm:w-auto left-6 right-6 dark:text-white  bg-gray-50 dark:bg-slate-800 drop-shadow md rounded-xl`}
        >
          {Menus.map((menu, index) => (
            <Link
              to={menu.path}
              key={index}
              onClick={() => setMobileMenu(false)}
            >
              <span
                className={` ${location.pathname === menu.path &&
                  'bg-gray-200 dark:bg-gray-700'
                  } p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700`}
              >
                {menu.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
