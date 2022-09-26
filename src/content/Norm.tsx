import norm from '../styles/images/norm.jpeg';
import { css } from '@emotion/css';
import React from 'react';
import { TextBubble } from './TextBubble';
import { Image } from '../shared/Image';

const useStyles = () => ({
    root: css({
        display: 'flex',
        alignItems: 'flex-start',
    }),
    norm: css({
        maxWidth: 150,
        transform: 'rotate(-15deg)',
    }),
    text: css({
        marginTop: -50,
    }),
});

export const Norm: React.FC = () => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <Image source={norm} alt={'photo of Norm'} className={styles.norm} />
            <div className={styles.text}>
                <TextBubble content={['*woof*']} />
            </div>
        </div>
    );
};
