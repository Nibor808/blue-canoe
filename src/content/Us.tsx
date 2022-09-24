import us from '../styles/images/us.png';
import { css } from '@emotion/css';
import React from 'react';
import { TextBubble } from './TextBubble';
import { Image } from '../shared/Image';
import { Norm } from './Norm';

const useStyles = () => ({
    root: css({
        display: 'flex',
        alignItems: 'flex-start',
    }),
    us: css({
        transform: 'rotate(15deg)',
        maxWidth: 400,
        marginTop: 80,
    }),
    textWidth: css({
        maxWidth: 400,
    }),
    norm: css({
        marginTop: 90,
        marginLeft: -50,
    }),
});

export const Us: React.FC = () => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <div className={styles.textWidth}>
                <TextBubble content={['Hi! Were Jess and Robin and this is our blue canoe.']} bubbleLeft />
            </div>

            <Image source={us} alt={'photo of us'} className={styles.us} />

            {/*<TextBubble content={['Join us as we explore crown landing camping around the Kawarthas.']} />*/}
            <div className={styles.textWidth}>
                <TextBubble content={['And this is Norm.']} />
            </div>

            <div className={styles.norm}>
                <Norm />
            </div>
        </div>
    );
};
