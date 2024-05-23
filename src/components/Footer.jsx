const Footer = () => {
    return (
        <>
            <footer className="footer mt-auto py-2 bg-dark text-center text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Contacto</h3>
                            <p>Email: mundorural@shop.com</p>
                            <p>Teléfono: (+598) 123 456-7890</p>
                        </div>
                        <div className="col-md-4">
                            <h3>Enlaces Rápidos</h3>
                            <ul className="list-unstyled">
                                <li className="pb-1"><a href="#" className="text-white">Inicio</a></li>
                                <li className="py-1"><a href="#" className="text-white">Contacto</a></li>
                                <li className="py-1"><a href="#" className="text-white">Catálogo</a></li>
                            </ul>
                        </div>
                        <div className=" col-md-4">
                            <h3>Síguenos</h3>
                            <div className="d-flex justify-content-center align-items-center">
                                <a href="https://www.facebook.com/" target="_blank" className="text-white mr-3"><i
                                    className="fa-brands fa-facebook p-3 fs-3"></i></a>
                                <a href="https://twitter.com/?lang=es" target="_blank" className="text-white mr-3"><i
                                    className="fa-brands fa-x-twitter p-3 fs-3"></i></a>
                                <a href="https://www.instagram.com/" target="_blank" className="text-white"><i
                                    className="fa-brands fa-instagram p-3 fs-3"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <p>&copy; 2023 ModaRural. Todos los derechos reservados.</p>
            </footer>
        </>
    )
}
export default Footer