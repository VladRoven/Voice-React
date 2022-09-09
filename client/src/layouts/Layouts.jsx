import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Layouts = ({ user }) => {
    return (
        <>
            <Header user={ user } />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layouts;
