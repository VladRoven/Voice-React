import React from 'react';
import Style from '../assets/styles/Login.module.scss';
import Button from '../components/Button';
import Input from '../components/Input';
import { NavLink } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { login } from '../middleware/queries';

const Login = () => {
    const handleLogin = async () => {
        mutate();
    };
    const { mutate } = useMutation(login);
    
    return (
        <main className={ Style.login }>
            <section>
                <h1>Авторизація</h1>
                <form>
                    <Input type="email" placeholder="E-mail" />
                    <Input type="password" placeholder="Пароль" />
                    <div>
                        <Button type="button" onClick={ handleLogin }>Увійти</Button>
                        <Button type="button">Забув пароль?</Button>
                    </div>
                </form>
            </section>
            <NavLink to="/" className={ Style.link }>На головну</NavLink>
        </main>
    );
};

export default Login;
