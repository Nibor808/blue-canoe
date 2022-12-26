import { createContext, useContext } from 'react';

export enum PageType {
    LANDING = 'LANDING',
    REVIEWS = 'REVIEWS',
    GALLERY = 'GALLERY',
    EXCURSIONS = 'EXCURSIONS',
}

export interface AppContextApi {
    page: PageType | undefined;
    setPage: (value: PageType | undefined) => void;
}

export const AppContext = createContext<AppContextApi>({
    page: undefined,
    setPage: () => undefined,
});

export const useAppContext = () => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error('useAppContext must be used within an AppContext Provider');
    }

    return context;
};
