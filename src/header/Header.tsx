import { css } from '@emotion/css';
import React from 'react';
import { Menu } from './Menu';
import { viewports } from '../styles/breakpoints';

const useStyles = () => ({
    root: css({
        display: 'flex',
        margin: '40px 20px 50px 20px',
        justifyContent: 'space-between',
    }),
    brandDiv: css({
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        flexDirection: 'column',
        borderBottom: '4px solid var(--yellow)',
        borderRadius: 4,
        paddingBottom: 5,
        [viewports.lg]: {
            flexDirection: 'row',
        },
    }),
    brand: css({
        fontFamily: 'MontReg, sans-serif',
        fontSize: 30,
        color: 'var(--canoe-blue)',
    }),
    tagline: css({
        fontFamily: 'RalewayLI, sans-serif',
        color: 'var(--off-white)',
        fontSize: 22,
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
