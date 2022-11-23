import { createGlobalStyle } from 'styled-components';

export const Globals = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body{
        background: #055555;
        background-size: cover;
        font-family: 'Roboto', sans-serif;
        height: 120vh;
    }
    li{
        list-style: none;
    }
    .container{
        padding: 0 80px;
    }
`