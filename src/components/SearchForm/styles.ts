import styled from "styled-components";


export const SearchFormContaienr = styled.form`
    display: flex;
    flex-direction: column;
    gap: .75rem;

    margin-top: 4.5rem;

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h2 {
            color: ${({ theme }) => theme["base-subtitle"]};
            font-size: 1.125rem;
        }

        span {
            color: ${({ theme }) => theme["base-span"]};
            font-size: .875rem;
        }
    }

    > input {
        padding: .75rem;

        border-radius: 6px;
        border: 2px solid ${({ theme }) => theme["base-border"]};
        background-color: ${({ theme }) => theme["base-input"]};
        color: ${({ theme }) => theme["base-text"]};
    }
`;