import React from 'react';
import Style from '../assets/styles/Login.module.scss';
import Button from '../components/Button';
import Input from '../components/Input';
import { Navigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getAuth, login } from '../middleware/queries';

const Login = ({ user, setUser, setIsLoading }) => {
    // const queryClient = useQueryClient();
    // const handleLogin = async () => {
    //     mutate();
    // };
    // const { mutate } = useMutation(login, {
    //     onSuccess: (data) => {
    //         setUser(data?.data?.login);
    //     }
    // });
    //
    // useEffect(() => {
    //     return () => {
    //         queryClient.cancelQueries('login');
    //     };
    // }, [queryClient]);
    
    if (user)
        return <Navigate to="/" />;
    else
        return (
            <main className={ Style.login }>
                <section>
                    <h1>Авторизація</h1>
                    <form>
                        <Input type="email" placeholder="E-mail" />
                        <Input type="password" placeholder="Пароль" />
                        <div>
                            <Button type="button">Увійти</Button>
                            <Button type="button">Забув пароль?</Button>
                        </div>
                    </form>
                </section>
            </main>
        );
};

export default Login;
