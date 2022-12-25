import { css } from '@emotion/css';
import React from 'react';
import { Menu } from './Menu';
import { viewports } from '../styles/breakpoints';

const useStyles = () => ({
    root: css({
        display: 'flex',
        margin: '20px',
        borderBottom: '1px solid var(--text-color)',
        justifyContent: 'space-between',
    }),
    brandDiv: css({
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        flexDirection: 'column',
        margin: '20px 0',
        [viewports.lg]: {
            flexDirection: 'row',
        },
    }),
    brand: css({
        fontFamily: 'MontReg, sans-serif',
        fontSize: 30,
        color: 'var(--canoe-blue)',
        textShadow: 'var(--shadowMed)',
    }),
    tagline: css({
        fontFamily: 'RalewayLI, sans-serif',
        color: 'var(--off-white)',
        fontSize: 22,
        textShadow: 'var(--shadowMed)',
        [viewports.lg]: {
            marginLeft: 15,
        },
    }),
});

export const Header: React.FC = () => {
    const styles = useStyles();

    return (
        <header className={styles.root}>
            <div className={styles.brandDiv}>
                <span className={styles.brand}>The Blue Canoe</span>
                <span className={styles.tagline}>Adventures in the Kawarthas</span>
            </div>

            <Menu />
        </header>
    );
};
