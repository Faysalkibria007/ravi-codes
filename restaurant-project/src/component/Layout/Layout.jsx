import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Home/Header';
import Footer from '../Home/Footer';

const Layout = () => {
    return (
        <div className='h-screen'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;