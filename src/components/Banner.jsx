import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="container">
      <div className="row p-2">
        <div className="col">
          <Link to={"/category/montura"} className="banner-link d-block text-decoration-none">
            <img src="../../public/bombacha_gaucho.png" alt="banner-ropa" className="img-fluid" />
            <h5 className="text-center">Monturas</h5>
          </Link>
        </div>
        <div className="col">
          <Link to={"/category/herramientas"} className="banner-link d-block text-decoration-none">
            <img src="../../public/botas_gaucho.jpg" alt="banner-calzado" className="img-fluid" />
            <h5 className="text-center">Herramientas</h5>
          </Link>
        </div>
        <div className="col">
          <Link to={"/category/vestimenta"} className="banner-link d-block text-decoration-none">
            <img src="../../public/boina_gaucho.jpg" alt="banner-sombreros" className="img-fluid" />
            <h5 className="text-center">Vestimenta</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
