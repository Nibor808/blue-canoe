import React from 'react';
import canoe from 'styles/images/canoe.jpg';
import { css } from '@emotion/css';
import { Image } from '../shared/Image';

const useStyles = () => ({
    canoe: css({
        height: 250,
    }),
});

export const Canoe: React.FC = () => {
    const styles = useStyles();

    return (
        <Image
            source={canoe}
            alt={'photo of the blue canoe packed for the first time with too much gear.'}
            className={styles.canoe}
        />
    );
};
