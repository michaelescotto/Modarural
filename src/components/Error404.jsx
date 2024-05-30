import { Link } from "react-router-dom"

const Error404 = () => {
    return (
        <>
            <div className="container text-center p-5 fs-3 my-5">
                <div className="row">
                    <div className="col">
                        <h1 className="fs-1 m-5 text-bold "> Error 404</h1>
                        <p>La pagina no existe.</p>
                        <Link className="btn btn-primary p-2 m-2 fs-2" to={"/"}>Ir al inicio</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error404