import { useNavigate } from "react-router-dom";
import ReactMarkdown from 'react-markdown';


import { IssueFromGithub } from "../../contexts/UserContext";
import { publishedDateRelativeToNow } from "../../utils/formatter";

import { IssueContainer, MarkdownContainer } from "./styles";

interface IssueProps {
    issue: IssueFromGithub
}

export function Issue({ issue }: IssueProps) {
    const navigate = useNavigate();

    function handleNavDetails() {
        navigate(`/details/${issue.id}`)
    }


    return (
        <IssueContainer onClick={handleNavDetails}>
            <div>
                <h3>{issue.title}</h3>
                <span>{publishedDateRelativeToNow(issue.created_at)}</span>
            </div>
            <MarkdownContainer>
                <ReactMarkdown>
                    {issue.body}
                </ReactMarkdown>

            </MarkdownContainer>
        </IssueContainer>
    )
}