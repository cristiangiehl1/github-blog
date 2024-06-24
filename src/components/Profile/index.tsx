import { 
    FaExternalLinkAlt, 
    FaGithubAlt, 
    FaBuilding, 
} from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { useContextSelector } from "use-context-selector";


import { 
    ProfileContainer, 
    ProfileContent, 
    UserInfo 
} from "./styles";

import { UserContext } from "../../contexts/UserContext";

export function Profile() {
    const userInfo = useContextSelector(UserContext, (context) => {
        return context.userInfo
    })

    return (
        <ProfileContainer>
            <ProfileContent>
                <img src={userInfo?.avatar_url} alt={`foto de perfil de ${userInfo?.name}`} />

                <UserInfo>
                    <div className="userNameAndLink">
                    <h2>{userInfo?.name}</h2>
                    <a href={userInfo?.html_url} target="_blank">
                        <span>Github</span>
                        <FaExternalLinkAlt />
                    </a>              
                    </div>

                    <p>{userInfo?.bio}</p>

                    <div className="userStatus">
                        <div className="iconAndStatusWrapper">
                            <FaGithubAlt />
                            <span>{userInfo?.login}</span>
                        </div>
                        <div className="iconAndStatusWrapper">
                            <FaBuilding />
                            <span>{userInfo?.company === null ? "No company" : userInfo?.company}</span>
                        </div>
                        <div className="iconAndStatusWrapper">
                            <IoPeople />
                            <span>{userInfo?.followers} {userInfo?.followers === 1 ? "seguidor" : "seguidores"}</span>
                        </div>
                    </div>
                </UserInfo>
            </ProfileContent>
        </ProfileContainer>
    )
}