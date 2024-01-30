import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import { useDarkMode } from '../context/Themecontext';

function Dashboard() {

    const { isDarkMode } = useDarkMode();

    return (
        <>
            <div className={`flex flex-auto h-screen ${isDarkMode && 'bg-black'}`}>
                <Sidebar />
                <div className='grow overflow-y-auto'>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Home />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
