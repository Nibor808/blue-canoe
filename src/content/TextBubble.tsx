import React from 'react';
import { css } from '@emotion/css';
import { viewports } from '../styles/breakpoints';

const useStyles = (bubbleLeft: boolean | undefined) => ({
    text: css({
        marginLeft: bubbleLeft ? 0 : 20,
        marginRight: bubbleLeft ? 20 : 0,
        fontFamily: 'Nunito, sans-serif',
        color: 'black',
        border: '1px solid black',
        borderRadius: bubbleLeft ? '40px 40px 0 40px' : '40px 40px 40px 0',
        background: 'white',
        width: '100%',
        minWidth: 75,
        'p:first-child': {
            marginTop: 0,
        },
        [viewports.sm]: {
            fontSize: 14,
            padding: '15px 15px 0 15px',
        },
        [viewports.md]: {
            fontSize: 16,
            padding: '17px 17px 0 17px',
        },
        [viewports.xl]: {
            fontSize: 22,
            padding: '20px 20px 0 20px',
        },
    }),
});

export const TextBubble: React.FC<{ content: string[]; bubbleLeft?: boolean }> = ({ content, bubbleLeft }) => {
    const styles = useStyles(bubbleLeft);

    return (
        <div className={styles.text}>
            {content.map((item) => (
                <p key={`${item}`}>{item}</p>
            ))}
        </div>
    );
};
