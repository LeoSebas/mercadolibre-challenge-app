import { useParams } from "react-router-dom"
import { useProduct } from "../../hooks/useProduct"
import { useProductDescription } from "../../hooks/useProductDescription"
export function ProductDetailsPage() {

    const {id} = useParams()

    const [ product ] = useProduct(id)
    const [ description ] = useProductDescription(id)

    return (product && description) ? (<main className="container mx-auto">
        <div className="">
            Lista de categorias
        </div>
        <section>
            <article>
                <div>
                    <img src={`${product.pictures[0].url}`} alt="Product" />
                </div>
                <div>
                    {description.plain_text}
                </div>

            </article>
            <aside>

            </aside>
        </section>
    </main>)
    : <main>Loading...</main>
}