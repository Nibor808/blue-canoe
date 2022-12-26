import React from 'react';
import { css } from '@emotion/css';
import { menuItems } from './menuItems';
import { viewports } from '../styles/breakpoints';
import { useAppContext } from '../context/AppContext';

const useStyles = () => ({
    root: css({
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        margin: 0,
        padding: 0,
        marginBottom: 20,
        [viewports.sm]: {
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 10, // line up with subtitle
            marginBottom: 0,
        },
    }),
    item: css({
        position: 'relative',
        marginRight: 30,
        listStyle: 'none',
        color: 'var(--text-color)',
        fontFamily: 'MontReg, sans-serif',
        fontSize: 18,
        '&:after': {
            transition: 'all 0.3s ease-in-out',
            content: "''",
            position: 'absolute',
            top: 0,
            bottom: -5,
            left: '50%',
            right: '50%',
            borderBottom: '2px solid var(--off-white)',
            width: 0,
        },
        '&:hover': {
            cursor: 'pointer',
            '&:after': {
                width: '100%',
                left: 0,
                right: 0,
            },
        },
        a: {
            color: 'inherit',
            textDecoration: 'none',
        },
    }),
});

export const Menu: React.FC = () => {
    const styles = useStyles();
    const { setPage } = useAppContext();

    return (
        <ul className={styles.root}>
            {menuItems.map((item) => (
                <li className={styles.item} key={item.title} aria-label={item.title} onClick={() => setPage(item.page)}>
                    {item.title}
                </li>
            ))}
        </ul>
    );
};
