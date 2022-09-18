import us from '../styles/images/us.png';
import { css } from '@emotion/css';
import React from 'react';
import { TextBubble } from './TextBubble';

const useStyles = () => ({
    us: css({
        display: 'flex',
        alignItems: 'flex-start',
        img: {
            borderRadius: '8px',
            boxShadow: 'var(--shadow)',
            width: '100%',
            minWidth: 300,
            marginTop: 80,
        },
    }),
});

export const Us: React.FC = () => {
    const styles = useStyles();

    return (
        <div className={styles.us}>
            <TextBubble content={['Hi! Were Jess and Robin and this is our blue canoe.']} bubbleLeft />

            <div data-testid="us-img">
                <img src={us} alt="photo of us" />
            </div>

            <TextBubble content={['Join us as we explore crown landing camping around the Kawarthas.']} />
        </div>
    );
};
