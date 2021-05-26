import {createGlobalStyle} from 'styled-components';

const GlobadStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        width: 100%;
        background: linear-gradient(90deg, lightblue, blue);
    }

`;

export default GlobadStyles;