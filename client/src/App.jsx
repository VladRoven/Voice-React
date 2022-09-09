import React, { useEffect, useState } from 'react';
import './assets/styles/Global.scss';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Cabinet from './pages/Cabinet';
import { getAuth } from './middleware/queries';
import { useQuery } from '@tanstack/react-query';
import Preloader from './components/Preloader';
import Layouts from './layouts/Layouts';

const App = () => {
    const { isLoading: isLoadingUser } = useQuery(['getAuth'], getAuth, {
        refetchOnWindowFocus: false,
        onSuccess: (data) => {
            setUser(data?.auth);
            setIsLoading(false);
        }
    });
    const [user, setUser] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const handlerLoad = () => {
            setIsLoading(isLoadingUser);
        };
        
        window.addEventListener('load', handlerLoad);
        return () => {
            window.removeEventListener('load', handlerLoad);
        };
    }, [isLoadingUser]);
    
    if (isLoading)
        return <Preloader />;
    else
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Layouts user={ user } /> }>
                        <Route index element={ <Main /> } />
                        <Route path="about" element={ <About /> } />
                    </Route>
                    <Route path="/login" element={
                        user ?
                            <Navigate to="/" /> :
                            <Login />
                    } />
                    <Route path="/cabinet" element={
                        user ?
                            <Cabinet /> :
                            <Navigate to="/login" />
                    }>
                    
                    </Route>
                    <Route path="*" element={ <NotFound /> } />
                </Routes>
            </BrowserRouter>
        );
};

export default App;
