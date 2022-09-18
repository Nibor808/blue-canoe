import { css } from '@emotion/css';
import React from 'react';
import { Menu } from './Menu';
import { viewports } from '../styles/breakpoints';

const useStyles = () => ({
    root: css({
        display: 'flex',
        margin: '20px',
        borderBottom: '1px solid var(--yellow)',
        justifyContent: 'space-between',
    }),
    brand: css({
        display: 'flex',
        alignItems: 'baseline',
        h1: {
            fontFamily: 'MontReg, sans-serif',
            color: 'var(--yellow)',
            span: {
                fontFamily: 'RalewayLI, sans-serif',
                fontSize: '0.7em',
                marginLeft: '15px',
            },
        },
        [viewports.lg]: {
            flexDirection: 'column',
        },
    }),
});

export const Header: React.FC = () => {
    const styles = useStyles();

    return (
        <header className={styles.root}>
            <div className={styles.brand}>
                <h1>
                    The Blue Canoe <span>Adventures in the Kawarthas</span>
                </h1>
            </div>

            <Menu />
        </header>
    );
};
