import React from 'react';
import { css } from '@emotion/css';
import { menuItems } from './menuItems';

const useStyles = () => ({
    root: css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 0,
        padding: 0,
        marginTop: 12, // line up with subtitle
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
            left: 0,
            bottom: -5,
            right: 0,
            borderBottom: '2px solid var(--hover-highlight)',
            opacity: 0,
        },
        '&:hover': {
            cursor: 'pointer',
            color: 'var(--text-color-hover)',
            '&:after': {
                opacity: 1,
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

    return (
        <ul className={styles.root}>
            {menuItems.map((item) => (
                <li className={styles.item} key={item.title} aria-label={item.title}>
                    <a href="#">{item.title}</a>
                </li>
            ))}
        </ul>
    );
};
