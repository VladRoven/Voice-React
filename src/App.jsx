import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './Pages/Main';
import Header from './Layouts/Header';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import Footer from './Layouts/Footer';

const App = () => {
    return (
        <React.StrictMode>
            <Header />
            <Routes>
                <Route path="/" element={ <Main /> } />
                <Route path="/about" element={ <About /> } />
                <Route path="*" element={ <NotFound /> } />
            </Routes>
            <Footer />
        </React.StrictMode>
    );
};

export default App;
