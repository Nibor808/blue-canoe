import { css } from '@emotion/css';
import React from 'react';

const useStyles = () => ({
    root: css({
        display: 'flex',
        margin: '20px',
        borderBottom: '1px solid var(--yellow)',
        h1: {
            fontFamily: 'MontReg, sans-serif',
            color: 'var(--yellow)',
            span: {
                fontFamily: 'RalewayLI, sans-serif',
                fontSize: '0.7em',
                marginLeft: '15px',
            },
        },
    }),
});

export const Header: React.FC = () => {
    const styles = useStyles();

    return (
        <header className={styles.root}>
            <h1>
                The Blue Canoe <span>Adventures in the Kawarthas</span>
            </h1>
        </header>
    );
};
