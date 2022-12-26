import { css } from '@emotion/react';
import nunito from './fonts/NunitoSans-Regular.ttf';
import ralewayReg from './fonts/Raleway-Regular.ttf';
import ralewayLight from './fonts/Raleway-LightItalic.ttf';
import montserratReg from './fonts/Montserrat-Regular.ttf';

export const globalStyles = css`
    :root {
        --shadowSm: 0 2px 3px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.9);
        --shadowMed: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
        --shadowLg: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
        --text-color: #3b2c2c;
        --off-white: #f5f0db;
        --canoe-blue: rgba(4, 36, 151, 1); /* 042497 */
        --green: rgba(95, 151, 4, 1);
        --yellow: #ffda00;
        --mask: linear-gradient(#000 0 0) center/calc(100% - 12px) calc(100% - 12px) no-repeat,
            conic-gradient(from 135deg at top, #0000, #000 1deg 89deg, #0000 90deg) 0 0 /12px 6px space no-repeat,
            conic-gradient(from -45deg at bottom, #0000, #000 1deg 89deg, #0000 90deg) 0 100%/12px 6px space no-repeat,
            conic-gradient(from 45deg at left, #0000, #000 1deg 89deg, #0000 90deg) 0 0 /6px 12px no-repeat space,
            conic-gradient(from -135deg at right, #0000, #000 1deg 89deg, #0000 90deg) 100% 0/6px 12px no-repeat space;
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
