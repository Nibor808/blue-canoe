import React from 'react';
import canoe from 'styles/images/canoe.jpg';
import { css } from '@emotion/css';

const useStyles = () => ({
    root: css({
        img: {
            borderRadius: '8px',
            boxShadow: 'var(--shadow)',
            width: '100%',
            minWidth: 500,
        },
    }),
});

export const Canoe: React.FC = () => {
    const styles = useStyles();

    return (
        <div data-testid="canoe-img" className={styles.root}>
            <img src={canoe} alt="photo of the blue canoe" />
        </div>
    );
};
