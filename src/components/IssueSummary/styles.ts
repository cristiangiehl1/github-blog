import styled from "styled-components";



export const IssueSummaryContainer = styled.div`
    margin: -6rem auto 0;
    
    background: ${({ theme }) => theme["base-profile"]};
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: start;
    
    padding: 2rem;

    nav {
        width: 100%;
        display: flex; 
        align-items: center;
        justify-content: space-between;

        margin-bottom: 1.25rem;

        

        button {
            display: flex;
            align-items: center;
            border: none;
            background: transparent;
            color: ${({ theme }) => theme.blue};
            cursor: pointer;
            text-transform: uppercase;
            font-size: .75rem;
            font-weight: bold;

            &:hover {
                color: ${({ theme }) => theme["blue-hover"]};
            }
        }

        a {
            display: flex;
            align-items: center;
            gap: .5rem;

            color: ${({ theme }) => theme.blue};
            text-decoration: none;
            text-transform: uppercase;
            font-size: .75rem;
            font-weight: bold;

            transition: color .3s ease-in-out;

            &:hover {
                color: ${({ theme }) => theme["blue-hover"]};
            }
        }
    }

    .issueStatus {
        display: flex;
        align-items: center;
        gap: 2rem;
        margin-top: .5rem;
                
        .iconAndStatusWrapper {
            display: flex; 
            align-items: center;
            gap: .5rem;
            color: ${({ theme }) => theme["base-span"]};
        }
    }
`;


export const BaseSummaryContainer = styled.section`
        margin: -6rem auto 0;
        
        background: ${({ theme }) => theme["base-profile"]};
        border-radius: 10px;

        display: flex;
        align-items: center;
        gap: 2rem;
        
        padding: 0 2rem;
`;
