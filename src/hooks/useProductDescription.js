import { useCallback, useEffect, useState } from "react";
import { getProductDescription } from "../services/products";

export function useProductDescription(id) {
    
    const [description , setDescription ] = useState();

    const getDescription = useCallback( async () => {
        try {
            const response = await getProductDescription(id)
            console.log(response);
            setDescription(response)
        } catch (error) {
            console.log(error)
        }
    }, [id])

    useEffect(()=> {
        getDescription()
    }, [id, getDescription])

    return [description, getDescription]
}