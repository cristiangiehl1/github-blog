import { useContextSelector } from "use-context-selector";

import { IssueFromGithub, UserContext } from "../../contexts/UserContext";

import { HomeContainer, HomeContent, IssuesContainer} from "./styles";

import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { SearchForm } from "../../components/SearchForm";
import { Issue } from "../../components/Issue";


export function Home() {
  const issues = useContextSelector(UserContext, (context) => {
    return context.issues
  });

  return (
    <HomeContainer>
      <Header />

      <HomeContent>       
        <Profile />
        <SearchForm />
        <IssuesContainer>
        { issues &&
          issues.map((issue: IssueFromGithub, index: number) => (
            <Issue key={index} issue={issue} />
          ))
        }     
        </IssuesContainer>
      </HomeContent>
    </HomeContainer>
    
  )
}

