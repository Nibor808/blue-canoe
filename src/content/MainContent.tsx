import { css } from '@emotion/css';
import { Us } from './Us';
import { Canoe } from './Canoe';

const useStyles = () => ({
    root: css({
        padding: 40,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }),
    text: css({
        marginTop: 50,
        fontFamily: 'Nunito, sans-serif',
        textShadow: 'var(--textShadow)',
        color: 'var(--yellow)',
    }),
});

export const MainContent = () => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <Us />
            <Canoe />
            <h2 className={styles.text}>Join us as we explore crown landing camping around the Kawarthas.</h2>
        </div>
    );
};
