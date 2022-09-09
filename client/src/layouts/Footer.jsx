import React from 'react';
import Style from '../assets/styles/Footer.module.scss';
import { Link } from 'react-router-dom';
import Email from '../assets/images/email.png';
import Phone from '../assets/images/phone.png';
import Logo from '../components/Logo';

const Footer = () => {
    return (
        <footer>
            <section className={ Style.logo }>
                <Logo size={ 130 } />
                <p className={ Style.logoSub }>Voice © 2022</p>
            </section>
            <section className={ Style.navigation }>
                <h3>Сторінки</h3>
                <nav>
                    <Link to="/">Головна</Link>
                    <Link to="/about">Про нас</Link>
                </nav>
            </section>
            <section className={ Style.contact }>
                <h3>Зв’язок</h3>
                <nav>
                    <a href="mailto:vlad.rovenchak@gmail.com"><img src={ Email } alt="Email" />vlad.rovenchak@gmail.com</a>
                    <a href="tel:+380983139195"><img src={ Phone } alt="Телефон" />+380 (98) 313 91 95</a>
                </nav>
            </section>
        </footer>
    );
};

export default Footer;
