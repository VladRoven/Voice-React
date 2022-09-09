import React from 'react';
import Style from '../assets/styles/NotFound.module.scss';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Logo from '../components/Logo';

const NotFound = () => {
    return (
        <main className={ Style.notFound }>
            <Logo size={ 350 } />
            <h1>Помилка 404</h1>
            <p className={ Style.sub }>Сторінку не знайдено</p>
            <Link to="/">
                <Button>На головну</Button>
            </Link>
        </main>
    );
};

export default NotFound;
