import React, { useEffect, useState } from 'react';
import './assets/styles/Global.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from './pages/Main';
import Header from './layouts/Header';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Footer from './layouts/Footer';
import Login from './pages/Login';
import Cabinet from './pages/Cabinet';

const App = () => {
    const [user, setUser] = useState(false);
    
    useEffect(() => {
        fetch('http://localhost:5000/api/user/auth')
        .then(response => response.json())
        .then(({ auth }) => {
            setUser(auth);
        });
    }, []);
    
    return (
        <React.StrictMode>
            <Header user={ user } />
            <Routes>
                <Route path="/" element={ <Main /> } />
                <Route path="/about" element={ <About /> } />
                <Route path="/login" element={ user ? <Navigate to="/" /> : <Login onLogin={ setUser } /> } />
                <Route path="/cabinet" element={ user ? <Cabinet /> : <Navigate to="/login" /> } />
                <Route path="*" element={ <NotFound /> } />
            </Routes>
            <Footer />
        </React.StrictMode>
    );
};

export default App;
