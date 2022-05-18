import { ML_API } from "./MLapi";

export function getSearchResults( query, page ) {
    return ML_API.get(`sites/MLA/search?q=${query}&offset=${(page-1)*4}&limit=4`)
}