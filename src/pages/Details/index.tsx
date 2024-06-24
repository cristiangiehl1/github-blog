import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useContextSelector } from "use-context-selector";

import { 
    DetailsContainer, 
    DetailsContent, 
    MarkDownContainer 
} from "./styles";

import { UserContext } from "../../contexts/UserContext";

import { Header } from "../../components/Header";
import { IssueSummary } from "../../components/IssueSummary";


export function Details() {
    const issues = useContextSelector(UserContext, (context) => {
        return context.issues
    });
    const { id } = useParams<{ id: string }>();
    
    const issuesFiltered = issues.find(item => item.id === Number(id))      

    return (
        <DetailsContainer>
            <Header />
            <DetailsContent>
                <IssueSummary issue={issuesFiltered}/>

                <MarkDownContainer>
                <ReactMarkdown
                        children={issuesFiltered?.body}
                        components={{
                            code({ className, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || '');
                                return match ? (
                                    <SyntaxHighlighter
                                        language={match[1]}
                                        style={atomDark}
                                        PreTag="div"
                                        {...props}
                                    >
                                        {String(children).replace(/\n$/, '')}
                                    </SyntaxHighlighter>
                                ) : (
                                    <code className={className} {...props}>
                                        {children}
                                    </code>
                                );
                            },
                        }}
                    />
                </MarkDownContainer>

            </DetailsContent>
        </DetailsContainer>
    )
}