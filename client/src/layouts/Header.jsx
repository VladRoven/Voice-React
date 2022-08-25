import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Styles from '../assets/styles/Header.module.scss';
import Person from '../assets/images/personCabinet.png';


const Header = ({ user }) => {
    const [classes, setClasses] = useState(`${ Styles.header }`);
    const SCROLL = 100;
    
    useEffect(() => {
        let lastScroll = 0;
        const scroll = () => {
            setClasses(window.scrollY >= SCROLL && window.scrollY > lastScroll ?
                `${ Styles.header } ${ Styles.setBackground } ${ Styles.hide }` :
                `${ Styles.header } ${ Styles.setBackground }`);
            window.scrollY < SCROLL && setClasses(`${ Styles.header }`);
            lastScroll = window.scrollY;
        };
        
        window.addEventListener('scroll', scroll);
        
        return () => {
            window.removeEventListener('scroll', scroll);
        };
    }, []);
    
    return (
        <header className={ classes }>
            <Link to="/" className={ Styles.logo }>Voice</Link>
            <nav>
                <Link to="/">Головна</Link>
                <Link to="/about">Про нас</Link>
            </nav>
            {
                user ?
                    <Link to="/cabinet" className={ Styles.authorization }>
                        <img src={ Person } alt="Person cabinet" />
                        Кабінет
                    </Link> :
                    <span className={ Styles.noAuthorization }>
                        <Link to="/login">Вхід</Link>
                        <Link to="/signup">Реєстрація</Link>
                    </span>
            }
        </header>
    );
};

export default Header;