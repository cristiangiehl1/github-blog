import { useForm } from "react-hook-form";
import { SearchFormContaienr } from "./styles";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useContextSelector } from "use-context-selector";

import { UserContext } from "../../contexts/UserContext";

const searchFormSchema = z.object ({
    query: z.string(),
})

type searchFormInputs = z.infer<typeof searchFormSchema>


export function SearchForm() {
    const { issues, fetchIssues } = useContextSelector(UserContext, (context) => {
        return {
            issues: context.issues,
            fetchIssues: context.fetchIssues
        }
    });

    const { handleSubmit, register, reset} = useForm<searchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })

    async function handleSearchPubli(data: searchFormInputs) {
        fetchIssues(data.query)
        reset();
    }

    return (
        <SearchFormContaienr onSubmit={handleSubmit(handleSearchPubli)}>
            <div>
                <h2>Publicações</h2>
                <span>{issues?.length} {issues.length === 1 ? "publicação" : "publicações" }</span>
            </div>
            <input 
                type="text"
                placeholder="Buscar conteúdo"
                {...register('query')} 
            />
           
        </SearchFormContaienr>
    )
}