import { createGlobalStyle } from "styled-components";

const Styles = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    body{
        padding-top: 67px;
    }
    
    h1, h2, h3{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    h2{
        font-size: 24px;
        color: #293845;
    }

    h3{
        color: #293845;
    }
`;

export default Styles;
