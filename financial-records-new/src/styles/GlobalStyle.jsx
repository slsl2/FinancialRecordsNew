import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    html {
        font-size: 62.5%; /* 1rem을 10px로 변환 (원래는 16px) */
    }

    body {
        font-size: 2rem;
        background-color: #2ec4b6;
    }

    button:hover {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;
