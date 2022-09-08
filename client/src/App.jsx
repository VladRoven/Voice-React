import React, { useEffect, useState } from 'react';
import './assets/styles/Global.scss';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import Header from './layouts/Header';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Footer from './layouts/Footer';
import Login from './pages/Login';
import Cabinet from './pages/Cabinet';
import { getAuth } from './middleware/queries';
import { useQuery } from '@tanstack/react-query';
import Preloader from './components/Preloader';

const App = ({ hidingPath }) => {
    const { isLoading: isLoadingUser } = useQuery(['getAuth'], getAuth, {
        refetchOnWindowFocus: false,
        onSuccess: (data) => {
            setUser(data?.auth);
            setIsLoading(false);
        }
    });
    const [user, setUser] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const pathname = window.location.pathname;
    
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
                { !hidingPath.includes(pathname) && <Header user={ user } /> }
                <Routes>
                    <Route path="/" element={ <Main /> } />
                    {/*<Route path="/about" element={ <About /> } />*/ }
                    <Route path="/login" element={
                        <Login user={ user } setUser={ setUser } setIsLoading={ setIsLoading } />
                    } />
                    {/*<Route path="/cabinet" element={ user?.auth ? <Cabinet /> : <Navigate to="/login" /> } />*/ }
                    <Route path="*" element={ <NotFound /> } />
                </Routes>
                { !hidingPath.includes(pathname) && <Footer /> }
            </BrowserRouter>
        );
};

export default App;
