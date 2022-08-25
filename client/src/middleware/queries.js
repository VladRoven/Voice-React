import axios from 'axios';

const server = axios.create({
    baseURL: 'http://localhost:5000'
});

const getAuth = () =>
    server.get('/api/user/auth').then(result => result.data);

const login = () => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    
    const promise = server.post('/api/user/login', { cancelToken: source.token });
    
    promise.cancel = () => {
        source.cancel('Query was cancelled by React Query');
    };
    
    return promise;
};

export { getAuth, login };