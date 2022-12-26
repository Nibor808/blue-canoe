import { PageType } from '../context/AppContext';

export interface MenuItem {
    title: string;
    page: PageType;
}

export const menuItems: MenuItem[] = [
    {
        title: 'Excursions',
        page: PageType.EXCURSIONS,
    },
    {
        title: 'Reviews',
        page: PageType.REVIEWS,
    },
    {
        title: 'Photo Album',
        page: PageType.GALLERY,
    },
];
