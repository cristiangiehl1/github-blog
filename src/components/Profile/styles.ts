import styled from "styled-components";

export const ProfileContainer = styled.div`

`;

export const ProfileContent = styled.section`
    height: 13.25rem;

    margin: -6rem auto 0;
    
    background: ${({ theme }) => theme["base-profile"]};
    border-radius: 10px;

    display: flex;
    align-items: center;
    gap: 2rem;
    
    padding: 0 2rem;

    > img {
        width: 9.25rem;
        height: 9.25rem;

        border-radius: 8px;
    }
`;

export const UserInfo = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: column; 
    
    .userNameAndLink {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: .5rem;

        h2 {
            font-size: 1.5rem;
            color: ${({ theme }) => theme["base-title"]};
        }
    }

    .userStatus {
        display: flex;
        align-items: center;
        gap: 1.5rem;       

        margin-top: 1.5rem;

        .iconAndStatusWrapper {
            display: flex; 
            align-items: center;
            gap: .5rem;
            color: ${({ theme }) => theme["base-span"]};
        }
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.blue};

        display: flex;
        align-items: center;
        gap: .5rem;
        
        transition: color .3s ease-in-out;

        &:hover {
            color: ${({ theme }) => theme["blue-hover"]};
        }

        span {
            display: block;
            text-transform: uppercase;
            font-size: .75rem;
            font-weight: bold;
        }
    }
`;

