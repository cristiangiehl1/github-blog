import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    :focus {
        outline: 0;
        box-shadow: 0 0 0 1.5px ${({ theme }) => theme['base-text']};
    }

    body {
        background: ${({ theme }) => theme['base-background']};
        color: ${({ theme }) => theme['base-text']};
        -webkit-font-smoothing: antialiased;
    }

    body,
    input,
    textarea,
    button {
        font-family: "Nunito", sans-serif;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.6;
    }

    ::-webkit-scrollbar {
        width: .3rem; 
    }

    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme['base-border']};
        border-radius: 9999px;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {        
        border: none;       
        -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme['base-input']} inset;
        -webkit-text-fill-color: ${({ theme }) => theme['base-text']};
        transition: background-color 5000s ease-in-out 0s;
    }

`