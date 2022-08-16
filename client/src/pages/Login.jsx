import React, { useEffect, useState } from 'react';
import Style from '../assets/styles/Login.module.scss';
import Button from '../components/Button';
import Input from '../components/Input';

const Login = ({ onLogin }) => {
    const [isClickLogin, setIsClickLogin] = useState(false);
    const login = e => {
        e.preventDefault();
        setIsClickLogin(true);
    };
    const forgot = async (e) => {
        e.preventDefault();
    };
    
    useEffect(() => {
        const controller = new AbortController();
        
        if (isClickLogin) {
            fetch('http://localhost:5000/api/user/auth', {
                signal: controller.signal
            })
            .then(response => response.json())
            .then(({ auth }) => {
                onLogin(auth);
            })
            .catch(e => {
                console.log(e.message);
            })
            .finally(() => setIsClickLogin(false));
        }
        
        return () => {
            controller.abort();
        };
    }, [isClickLogin, onLogin]);
    
    return (
        <main className={ Style.login }>
            <section>
                <h1>Авторизація</h1>
                <form>
                    <Input type="email" placeholder="E-mail" />
                    <Input type="password" placeholder="Пароль" />
                    <div>
                        <Button onClick={ login }>Увійти</Button>
                        <Button onClick={ forgot }>Забув пароль?</Button>
                    </div>
                </form>
            </section>
        </main>
    );
};

export default Login;
