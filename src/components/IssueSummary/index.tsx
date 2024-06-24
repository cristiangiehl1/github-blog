import { 
    FaExternalLinkAlt, 
    FaGithubAlt,  
    FaCalendarAlt,
    FaComment
} from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";

import { IssueSummaryContainer } from "./styles"
import { useNavigate } from "react-router-dom";
import { IssueFromGithub } from "../../contexts/UserContext";
import { publishedDateRelativeToNow } from "../../utils/formatter";

interface IssueSummaryProps {
    issue: IssueFromGithub | undefined
}

export function IssueSummary({ issue }: IssueSummaryProps) {
    const navigate = useNavigate();  

    function handleBack() {
        navigate(-1)
    }



    return (
        <IssueSummaryContainer> 
                <nav>
                    <button onClick={handleBack}>
                        <MdKeyboardArrowLeft size={22}/>
                        Voltar
                    </button>
                    <a href={issue?.url} target="_blank">
                        <span>Ver no Github</span>
                        <FaExternalLinkAlt />
                    </a>    
                </nav>

                <h2>{issue?.title}</h2>

                <div className="issueStatus">
                    <div className="iconAndStatusWrapper">
                        <FaGithubAlt />
                        <span>{issue?.user_login}</span>
                    </div>
                    <div className="iconAndStatusWrapper">
                        <FaCalendarAlt />
                        {issue && <span>{publishedDateRelativeToNow(issue.created_at)}</span>}
                    </div>
                    <div className="iconAndStatusWrapper">
                        <FaComment />
                        { issue &&
                            <span>{issue?.comments} {issue?.comments > 1 ? 'Comentários' : 'Comentário'}</span>
                        }
                    </div>
                </div>
        </IssueSummaryContainer>
    )

}