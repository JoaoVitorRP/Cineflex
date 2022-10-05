import { createGlobalStyle } from "styled-components";

const Styles = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    body{
        padding-top: 67px;
    }
    
    h1, h2{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    h2{
        font-size: 24px;
    }
`;

export default Styles;
