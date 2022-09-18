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
        marginRight: 30,
        listStyle: 'none',
        color: 'var(--yellow)',
        fontFamily: 'MontReg, sans-serif',
    }),
});

export const Menu: React.FC = () => {
    const styles = useStyles();

    return (
        <ul className={styles.root}>
            {menuItems.map((item) => (
                <li className={styles.item} key={item.title}>
                    {item.title}
                </li>
            ))}
        </ul>
    );
};
