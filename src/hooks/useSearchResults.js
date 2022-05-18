import { useCallback, useEffect, useState } from "react";
import { getSearchResults } from "../services/products";

export function useSearchResults({query , page}) {
    
    const [results , setResults ] = useState();

    const searchResults = useCallback( async () => {
        try {
            const response = await getSearchResults(query, page)
            console.log(response);
            setResults(response.results)
        } catch (error) {
            console.log(error)
        }
    }, [query, page])

    useEffect(()=> {
        searchResults()
    }, [query, page, searchResults])

    return [results, searchResults]
}