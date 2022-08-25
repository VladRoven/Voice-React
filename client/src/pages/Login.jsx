import React, { useEffect } from 'react';
import Style from '../assets/styles/Login.module.scss';
import Button from '../components/Button';
import Input from '../components/Input';
import { Navigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login } from '../middleware/queries';

const Login = ({ isLoading, user, setUser }) => {
    const queryClient = useQueryClient();
    const handleLogin = async () => {
        mutate();
    };
    const { mutate } = useMutation(login, {
        onSuccess: (data) => {
            setUser(data?.data?.login);
        }
    });
    
    useEffect(() => {
        return () => {
            // queryClient.cancelQueries('login');
        };
    }, [queryClient]);
    
    return (
        <main className={ Style.login }>
            { isLoading &&
                <h1>Loading...</h1>
            }
            { user === false &&
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
            }
            { user === true && <Navigate to="/" /> }
        </main>
    );
};

export default Login;
