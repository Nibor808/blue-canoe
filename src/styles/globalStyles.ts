import { css } from '@emotion/react';
import nunito from './fonts/NunitoSans-Regular.ttf';
import ralewayReg from './fonts/Raleway-Regular.ttf';
import ralewayLight from './fonts/Raleway-LightItalic.ttf';
import montserratReg from './fonts/Montserrat-Regular.ttf';

export const globalStyles = css`
    :root {
        --textShadow: 0 2px 3px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.9);
        --shadowMed: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
        --shadowLg: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
        --text-color: #f5f0db;
        --canoe-blue: #042497;
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
