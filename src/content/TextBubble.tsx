import React from 'react';
import { css } from '@emotion/css';
import { viewports } from '../styles/breakpoints';

const useStyles = (bubbleLeft?: boolean, bubbleLeftTop?: boolean) => ({
    text: css({
        marginLeft: bubbleLeft ? 0 : 20,
        marginRight: bubbleLeft ? 20 : 0,
        fontFamily: 'Nunito, sans-serif',
        color: 'black',
        boxShadow: 'var(--shadowMed)',
        borderRadius: bubbleLeftTop ? '40px 0 40px 40px' : bubbleLeft ? '40px 40px 0 40px' : '40px 40px 40px 0',
        background: 'white',
        padding: 15,
        p: {
            margin: 0,
        },
        'p:first-child': {
            marginTop: 0,
        },
        [viewports.sm]: {
            fontSize: 14,
        },
        [viewports.md]: {
            fontSize: 16,
        },
        [viewports.xl]: {
            fontSize: 22,
        },
    }),
});

export const TextBubble: React.FC<{ content: string[]; bubbleLeft?: boolean; bubbleLeftTop?: boolean }> = ({
    content,
    bubbleLeft,
    bubbleLeftTop,
}) => {
    const styles = useStyles(bubbleLeft, bubbleLeftTop);

    return (
        <div className={styles.text}>
            {content.map((item) => (
                <p key={`${item}`}>{item}</p>
            ))}
        </div>
    );
};
