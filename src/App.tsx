import { Header } from './Header';
import { MainContent } from './content/MainContent';
import { Global } from '@emotion/react';
import React from 'react';
import { globalStyles } from './styles/globalStyles';

export const App: React.FC = () => {
    return (
        <>
            <Global styles={globalStyles} />
            <Header />
            <MainContent />
        </>
    );
};
