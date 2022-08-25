import React, { useEffect, useState } from 'react';
import './assets/styles/Global.scss';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import Header from './layouts/Header';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Footer from './layouts/Footer';
import Login from './pages/Login';
import Cabinet from './pages/Cabinet';
import { getAuth } from './middleware/queries';
import { useQuery } from '@tanstack/react-query';

const App = () => {
    const { isLoading: isLoadingUser } = useQuery(['getAuth'], getAuth, {
        refetchOnWindowFocus: false,
        onSuccess: (data) => {
            setUser(data?.auth);
        }
    });
    const [user, setUser] = useState(undefined);
    
    return (
        <BrowserRouter>
            <Header user={ user } />
            <Routes>
                <Route path="/" element={ <Main /> } />
                {/*<Route path="/about" element={ <About /> } />*/ }
                <Route path="/login" element={
                    <Login isLoading={ isLoadingUser } user={ user } setUser={ setUser } /> } />
                {/*<Route path="/cabinet" element={ user?.auth ? <Cabinet /> : <Navigate to="/login" /> } />*/ }
                <Route path="*" element={ <NotFound /> } />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
