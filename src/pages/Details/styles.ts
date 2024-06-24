import styled from "styled-components";


export const DetailsContainer = styled.div`


`;


export const DetailsContent = styled.main`
    width: 100%;
    max-width: 864px;
    margin: 0 auto;
    padding: 1rem;
`;


export const MarkDownContainer = styled.div`
    height: 30vh;
    width: 100%;
    padding: 0 2rem;
    margin-top: 2.5rem;

    display: flex; 
    flex-direction: column;
    align-items: start;

    overflow: auto;

    gap: 1rem;

    h1 {
        font-size: 1.5rem;
        color: ${({ theme }) => theme["base-title"]};
    }

    a {
        color: ${({ theme }) => theme.blue};
        text-decoration: none;
        font-weight: bolder;

        transition: color .3s ease-in-out;

        &:hover {
            color: ${({ theme }) => theme["blue-hover"]};
        }
    }
    
    p:has(img) {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {       
        overflow: hidden;
        max-width: 25rem;
    }

    pre {
        width: 100%;
    }
`;