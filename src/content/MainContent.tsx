import { css } from '@emotion/css';
import { Us } from './Us';
import { Canoe } from './Canoe';

const useStyles = () => ({
    root: css({
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }),
});

export const MainContent = () => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <Us />
            <Canoe />
        </div>
    );
};
