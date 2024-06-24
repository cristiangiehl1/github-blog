import { ReactNode, useCallback, useEffect, useState } from "react";

import { api } from "../lib/axios";
import { GITHUB_BASE_URL, GITHUB_REPO, GITHUB_TOKEN } from "../utils/github";
import { createContext } from "use-context-selector";


interface UserFromGithub {
    avatar_url: string,
    html_url: string,
    name: string,
    bio: string,
    login: string,
    company: string,
    followers: number,  
}

export interface IssueFromGithub {
    id: number,
    title: string,
    created_at: Date,
    comments: number,
    comments_url: string,
    body: string,
    url: string,
    user_login: string,
}

interface UserContextType {
    userInfo: UserFromGithub | undefined,
    issues: IssueFromGithub[],
    fetchIssues: (query: string) => void,
}

export const UserContext = createContext({} as UserContextType)

interface UserProviderProps {
    children: ReactNode,
}

export function UserProvider({ children }: UserProviderProps) {
    const [userInfo, setUserInfo] = useState<UserFromGithub>();
    const [issues, setIssues] = useState<IssueFromGithub[]>([]);


    const getUserInfo = useCallback(
        async () => {
            try {
                const { data } = await api.get(`${GITHUB_BASE_URL}/user`, {
                    headers: {
                        Authorization: `token ${GITHUB_TOKEN}`
                    }
                });           
                
                setUserInfo({
                    avatar_url: data.avatar_url,
                    html_url: data.html_url,
                    name: data.name,
                    bio: data.bio,
                    login: data.login,
                    company: data.company,
                    followers: data.followers                                  
                });
            } catch (error) {
                console.error('Error fetching user info', error);
                throw error;
            }
        },
        []
    );

    async function getIssuesInfo(query: string) {
        try {
            const repoQuery = `repo:cristiangiehl1/${GITHUB_REPO} ${query}`;
            const { data: {
                items
            }} = await api.get(`${GITHUB_BASE_URL}/search/issues`, {
                params: {
                    q: repoQuery,
                },
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`
                }
            });                
           
            const mappedIssues: IssueFromGithub[] = items.map((issue: any) => ({
                id: parseInt(issue.id),
                title: issue.title,
                created_at: new Date(issue.created_at),
                comments: issue.comments,
                comments_url: issue.comments_url,
                body: issue.body,
                url: issue.html_url,
                user_login: issue.user.login,
            }));                   

            setIssues(mappedIssues);
        } catch (error) {
            console.error('Error fetching issues', error);
            throw error;
        }
    }

    function fetchIssues(query: string) {        
        getIssuesInfo(query)
    }

    useEffect(() => {
        getUserInfo();
        getIssuesInfo('');
    }, [getUserInfo])

    return (
        <UserContext.Provider value={{
            userInfo,
            issues,
            fetchIssues
        }}>
            {children}
        </UserContext.Provider>
    )
}