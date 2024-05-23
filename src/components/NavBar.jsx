import { Link, NavLink } from 'react-router-dom'
import Brand from '../assets/images/modarural.png'
import CartWidget from './CartWidget'
const NavBar = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row bg-dark text-center text-white p-2'>
                    <div className="col text-center">
                        <Link className="navbar-brand" to={"/"}>
                            <img src={Brand} alt="Logo" width="250"></img>
                        </Link>
                    </div>
                    <div className='container-fluid p-2'>
                        <div className='row bg-dark text-center text-white'>
                            <div className='col'>
                                <ul className="nav justify-content-center">
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" aria-current="page" to={"/"}>Inicio</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to={"/category/montura"}>Montura</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to={"/category/vestimenta"}>Vestimenta</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to={"/category/herramientas"}>Herramientas</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-auto'>
                                <CartWidget />
                            </div>
                        </div>
                    </div>

                </div>
            </div>



        </>
    )
}

export default NavBar