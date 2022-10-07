import { createGlobalStyle } from "styled-components";

const Styles = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    body{
        padding-top: 67px;
    }
    
    h1, h2, h3, button, p, input, label{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    h2{
        font-size: 24px;
        color: #293845;
    }

    h3, label{
        color: #293845;
    }

    button{
        background: #E8833A;
        border: none;
        border-radius: 3px;
        cursor: pointer;

        font-size: 18px;
        color: #FFFFFF;
    }
`;

export default Styles;
