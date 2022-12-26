import React from 'react';
import { AppContext, AppContextApi, PageType } from './AppContext';

interface AppContextProviderProps {
    children: React.ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
    const [page, setPage] = React.useState<PageType | undefined>(PageType.LANDING);

    const api: AppContextApi = React.useMemo(() => {
        return {
            page,
            setPage,
        };
    }, [page, setPage]);

    return <AppContext.Provider value={api}>{children}</AppContext.Provider>;
};
