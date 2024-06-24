import styled from "styled-components";

export const HeaderContainer = styled.header`
    position: relative;
    width: 100%;
    height: 18.5rem;
    z-index: -1;

    background: linear-gradient(
        to bottom, 
        ${({ theme }) => theme["base-profile"]}, 
        rgba(21, 98, 175, 0.14)
    );

    display: flex;
    justify-content: center;
    align-items: center;

    > img {
        width: 16rem;
        position: absolute;
        z-index: -2;

        top: 50%;

        transform: translateY(-50%);

        @media(width > 1024px) {
            width: 25.5rem;
        }
    }

    .imgleft {
        left: 0;
    }

    .imgright {
        right: 0;
    }

    .logoContaienr {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.25rem;

        margin-bottom: 2.875rem;

        img {
            width: 2.8rem;
        }

        h1 {
            font-size: 1.5rem;
            color:  ${({ theme }) => theme.blue};
            text-transform: uppercase;
        }
    }
`;