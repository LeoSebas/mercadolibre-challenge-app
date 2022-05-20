import { Link } from "react-router-dom";

export function NotFound() {
     return (<main>
         <p>
        Página no encontrada.
        <Link className="text-sky-600" to="/">Volver al inicio</Link>
         </p>
     </main>)
}