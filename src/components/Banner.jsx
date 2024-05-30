import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col m-2 mb-3 border border-2 rounded-4 shadow-lg">
          <Link to={"/category/montura"} className="banner-link d-block text-decoration-none text-dark">
            <h5 className="text-center pt-3 fw-bold fs-3">Monturas</h5>
            <img src="/monturas.webp" alt="banner-ropa" className="img-fluid" />
          </Link>
        </div>
        <div className="col m-2 mb-3 border border-2 rounded-4 shadow-lg">
          <Link to={"/category/herramientas"} className="banner-link d-block text-decoration-none text-dark">
            <h5 className="text-center pt-3 fw-bold fs-3">Herramientas</h5>
            <img src="/herramientas.webp" alt="banner-calzado" className="img-fluid" />
          </Link>
        </div>
        <div className="col m-2 mb-3 border border-2 rounded-4 shadow-lg">
          <Link to={"/category/vestimenta"} className="banner-link d-block text-decoration-none text-dark">
            <h5 className="text-center pt-3 fw-bold fs-3">Vestimenta</h5>
            <img src="/vestimenta.webp" alt="banner-sombreros" className="img-fluid" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
