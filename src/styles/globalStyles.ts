import { css } from '@emotion/react';
import nunito from './fonts/NunitoSans-Regular.ttf';
import ralewayReg from './fonts/Raleway-Regular.ttf';
import ralewayLight from './fonts/Raleway-LightItalic.ttf';
import montserratReg from './fonts/Montserrat-Regular.ttf';

export const globalStyles = css`
    :root {
        --shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        --yellow: #f5f0db;
        --peach: #f49c98;
        --light-green: #b6dedd;
    }

    @font-face {
        font-family: 'Nunito';
        src: url(${nunito}) format('truetype');
    }

    @font-face {
        font-family: 'Raleway';
        src: url(${ralewayReg}) format('truetype');
    }

    @font-face {
        font-family: 'RalewayLI';
        src: url(${ralewayLight}) format('truetype');
        font-style: italic;
    }

    @font-face {
        font-family: 'MontReg';
        src: url(${montserratReg}) format('truetype');
    }
`;
