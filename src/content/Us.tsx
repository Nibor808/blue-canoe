import us from '../styles/images/us.png';
import { css } from '@emotion/css';
import React from 'react';

const useStyles = () => ({
    us: css({
        img: {
            borderRadius: '8px',
            boxShadow: 'var(--shadow)',
        },
    }),
});

export const Us: React.FC = () => {
    const styles = useStyles();

    return (
        <div data-testid="us-img" className={styles.us}>
            <img src={us} alt="photo of us" />
        </div>
    );
};
