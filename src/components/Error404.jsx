import { Link } from "react-router-dom"

const Error404 = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1> Error 404</h1>
                        <p>La pagina no existe.</p>
                        <Link className="btn btn-primary" to={"/"}>Ir al inicio</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error404