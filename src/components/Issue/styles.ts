import styled from "styled-components";


export const IssueContainer = styled.div`
    min-width: 100%;
    height:16.5rem;   

    padding: 2rem;

    background: ${({ theme }) => theme["base-post"]};
    border: none;
    border-radius: 10px;

    cursor: pointer;

    transition: transform .3s ease-in-out;

    &:hover {
        transform: scale(1.1)
    }

    > div {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 1rem;

        margin-bottom: 1.25rem;

        h3 {
            font-size: 1.25rem;
            color: ${({ theme }) => theme["base-title"]};
        }

        span {
            width: 35%;
            font-size: .875rem;
            color: ${({ theme }) => theme["base-span"]};
            text-align: center;
            
            
        }
    }
`;

export const MarkdownContainer = styled.div`
    height: 6rem;
    width: 100%;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: start;
    gap: .5rem;

    p {
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
    }
`;