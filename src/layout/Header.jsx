import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiLogIn } from "react-icons/fi";
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FaRegCopy } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { useDarkMode } from '../context/Themecontext';


function Header() {
  const [isProductOpen, setIsProductOpen] = useState(false);

  const { isToggled, toggleDarkMode, isDarkMode } = useDarkMode();

  const Navigate = useNavigate();

  const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#' },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#' },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#' },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#' },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#' },
  ];

  function handleLogout() {
    localStorage.removeItem('userCredentials');
    alert('Logout was successful');
    Navigate("/")
  }

  const accountId = '20000000563421';

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(accountId);
      alert('Account ID copied to clipboard!');
    } catch (error) {
      console.error('Unable to copy to clipboard:', error);
    }
  };

  return (
    <div className={`grid lg:grid-cols-3 lg:gap-20 gap-10 ${isDarkMode ? 'bg-black' : 'bg-[#f5f6fa]'} shadow-lg ${isDarkMode ? 'shadow-slate-800' : ''} py-3 px-6 items-center`}>

      <div>
        <button
          className="w-14 h-8 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow"
          onClick={toggleDarkMode}
        >
          <div
            id="switch-toggle"
            className={`w-8 h-8 relative rounded-full transition duration-500 transform ${isToggled ? 'bg-green-500 translate-x-8' : 'bg-yellow-500 -translate-x-2'
              } p-1 text-white`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isToggled ? (
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              )}
            </svg>
          </div>
        </button>
      </div>

      <div className='flex md:flex-row flex-col justify-end md:items-center col-span-2'>

        <div className='me-5'>
          <p className={`${isDarkMode ? 'text-[#f5f6fa]' : 'text-black'}`}>Account Id : {accountId} <span className='inline-block cursor-pointer' onClick={handleCopyClick}><FaRegCopy /></span></p>
        </div>

        <Popover className="relative">
          <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 focus:outline-none me-5">
            <div className='flex items-center justify-between'>
              <FaUserCircle fontSize={35} color={`${isDarkMode ? '#f5f6fa' : '#000000'}`} />
              <div className='ms-2 text-start'>
                <h4 className={`${isDarkMode ? 'text-white' : 'text-black'} text-lg font-bold`}>Lorem, ipsum.</h4>
                <p className='text-[#559d68] text-base font-semibold'>consectetur</p>
              </div>
            </div>
            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute top-full z-10 mt-3 w-full overflow-hidden rounded-xl text-center bg-white shadow-lg ring-1 ring-gray-900/5">
              <div>
                <div
                  className="group flex items-center gap-x-6 rounded-lg p-2 py-3 text-sm leading-6"
                >
                  <div className="flex-auto">
                    <button className="inline-block font-semibold text-center text-black" onClick={handleLogout}>
                      Log Out
                    </button>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">
          <FiLogIn fontSize={25} color={isDarkMode ? '#ffffff' : '#000000'} />
        </Link>
      </div>
    </div>
  );
}

export default Header;
