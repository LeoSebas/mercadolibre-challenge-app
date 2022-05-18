import { useSearchParams } from "react-router-dom"
import { useSearchResults } from "../../hooks/useSearchResults"

export function SearchResultsPage() {
    /// Parámetros de búsqueda obtenidos de la URL.
    const [searchParams] = useSearchParams()    

    /// Hook con los resultados de la búsqueda.
    const [results] = useSearchResults({query: searchParams.get("search"), page: searchParams.get("page")})


    return (
        <div className="container">
            <h1 className="text-3x1">Resultados de la busqueda</h1>
            {JSON.stringify(results)}
        </div>
    )
}