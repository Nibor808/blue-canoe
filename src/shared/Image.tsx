import React from 'react';
import { css, cx } from '@emotion/css';

const useStyles = () => ({
    imgDiv: css({
        position: 'relative',
        img: {
            maxWidth: '100%',
            maxHeight: '100%',
            boxShadow: 'var(--shadowSm)',
        },

        '&:before': {
            content: '""',
            position: 'absolute',
            zIndex: -1,
            background: 'white',
            mask: 'var(--mask)',
            top: -15,
            left: -15,
            right: -15,
            bottom: -15,
            filter: 'blur(0.05em) saturate(0.7) contrast(1.5) brightness(1.2)',
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
