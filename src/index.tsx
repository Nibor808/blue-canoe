import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { cache } from '@emotion/css';
import { CacheProvider as EmotionCacheProvider } from '@emotion/react';
import { AppContextProvider } from './context/AppContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <EmotionCacheProvider value={cache}>
            <AppContextProvider>
                <App />
            </AppContextProvider>
        </EmotionCacheProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
