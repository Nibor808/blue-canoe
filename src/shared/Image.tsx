import React from 'react';
import { css, cx } from '@emotion/css';

const useStyles = () => ({
    imgDiv: css({
        img: {
            border: '10px solid white',
            borderRadius: '8px',
            boxShadow: 'var(--shadowLg)',
            width: '100%',
            height: '100%',
        },
    }),
});

interface ImageProps {
    source: string;
    alt: string;
    className?: string;
}

export const Image: React.FC<ImageProps> = ({ source, alt, className }) => {
    const styles = useStyles();

    return (
        <div className={cx(styles.imgDiv, className)} data-testid={'Image'}>
            <img src={source} alt={alt} />
        </div>
    );
};
