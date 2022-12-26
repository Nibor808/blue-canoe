import { Header } from './header/Header';
import { Global } from '@emotion/react';
import React from 'react';
import { globalStyles } from './styles/globalStyles';
import { PageType, useAppContext } from './context/AppContext';
import { Landing } from './content/Landing';
import { Reviews } from './content/Reviews';

export const App: React.FC = () => {
    const { page } = useAppContext();

    const renderContent = React.useCallback(() => {
        switch (page) {
            case PageType.LANDING:
                return <Landing />;
            case PageType.REVIEWS:
                return <Reviews />;
            default:
        }
    }, [page]);

    return (
        <>
            <Global styles={globalStyles} />
            <Header />
            {renderContent()}
        </>
    );
};
