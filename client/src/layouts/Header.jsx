import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
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
            <NavLink to="/" className={ Styles.logo }>Voice</NavLink>
            <nav>
                <NavLink to="/" className={ Styles.link }>Головна</NavLink>
                <NavLink to="/about" className={ Styles.link }>Про нас</NavLink>
            </nav>
            {
                user ?
                    <NavLink to="cabinet" className={ Styles.authorization }>
                        <img src={ Person } alt="Особистий кабінет" />
                        <p className={ Styles.link }>Кабінет</p>
                    </NavLink> :
                    <span className={ Styles.noAuthorization }>
                        <NavLink to="login" className={ Styles.link }>Вхід</NavLink>
                        <NavLink to="signup">Реєстрація</NavLink>
                    </span>
            }
        </header>
    );
};

export default Header;
