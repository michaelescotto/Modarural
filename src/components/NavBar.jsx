import { Link, NavLink } from 'react-router-dom';
import Brand from '../assets/images/modarural.png';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fs-4">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src={Brand} alt="Logo" width="200" className='rounded-2'/>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/">
                    Inicio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/category/montura">
                    Montura
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/category/vestimenta">
                    Vestimenta
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/category/herramientas">
                    Herramientas
                  </NavLink>
                </li>
              </ul>
              <div className="d-flex align-items-center">
                <CartWidget />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
