import { useCallback, useEffect, useState } from "react";
import { getProduct } from "../services/products";

export function useProduct(id) {
    
    const [product , setProduct ] = useState();

    const _getProduct = useCallback( async () => {
        try {
            const response = await getProduct(id)
            console.log(response);
            setProduct(response)
        } catch (error) {
            console.log(error)
        }
    }, [id])

    useEffect(()=> {
        _getProduct()
    }, [id, _getProduct])

    return [product, _getProduct]
}