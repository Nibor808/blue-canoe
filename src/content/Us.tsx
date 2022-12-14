import us from '../styles/images/us.png';
import { css, cx } from '@emotion/css';
import React from 'react';
import { TextBubble } from './TextBubble';
import { Image } from '../shared/Image';
import { Norm } from './Norm';

const useStyles = () => ({
    root: css({
        display: 'flex',
    }),
    usImg: css({
        transform: 'rotate(15deg)',
        margin: '60px 0',
    }),
    textWidth: css({
        maxWidth: 400,
    }),
    norm: css({
        marginTop: 90,
        marginLeft: -50,
        zIndex: 10,
    }),
    topAdjust20: css({
        marginTop: 20,
    }),
    leftContainer: css({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: 25,
    }),
});

export const Us: React.FC = () => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <div className={styles.leftContainer}>
                <div className={styles.textWidth}>
                    <TextBubble content={["Hi! We're Jess and Robin..."]} bubbleLeft />
                </div>

                <div className={styles.textWidth}>
                    <TextBubble content={['And this is our blue canoe.']} bubbleLeftTop />
                </div>
            </div>

            <Image source={us} alt={'photo of us'} className={styles.usImg} />

            <div className={cx(styles.textWidth, styles.topAdjust20)}>
                <TextBubble content={['and this is Norm!']} />
            </div>

            <div className={styles.norm}>
                <Norm />
            </div>
        </div>
    );
};
