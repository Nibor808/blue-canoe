import { css } from '@emotion/css';
import { Us } from './Us';

const useStyles = () => ({
    root: css({
        padding: '40px',
    }),
});

export const MainContent = () => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <Us />
        </div>
    );
};
