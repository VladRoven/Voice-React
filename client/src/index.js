import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));
const client = new QueryClient();
const hidingPath = ['/login'];

root.render(
    <>
        <QueryClientProvider client={ client }>
            <App hidingPath={ hidingPath } />
        </QueryClientProvider>
    </>
);
