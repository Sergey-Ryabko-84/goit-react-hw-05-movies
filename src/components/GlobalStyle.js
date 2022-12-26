import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    width: 100vw;
    overflow-x: hidden;
    }

    *,
    *::before,
    *::after {
    box-sizing: inherit;
    }

    body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }


    img {
    display: block;
    max-width: 100%;
    /* height: auto; */
    }

    h1, h2, h3, h4, h5, h6, p, ul {
        margin: 0;
    }
`;