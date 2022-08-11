import React from 'react';
import Style from '../Assets/Styles/NotFound.module.scss';
import Logo from '../Assets/Images/logo.png';
import { Link } from 'react-router-dom';
import Button from '../Components/Button';

const NotFound = () => {
    return (
        <main className={ Style.notFound }>
            <img src={ Logo } alt="Logo" />
            <h1>Помилка 404</h1>
            <p>Сторінку не знайдено</p>
            <Link to="/">
                <Button>На головну</Button>
            </Link>
        </main>
    );
};

export default NotFound;
