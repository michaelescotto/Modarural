import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="col-md-4 mb-4">
      <Link to={"/item/" + item.id} className="text-decoration-none">
        <div className="card h-100 shadow-sm border-0">
          <img
            src={item.imagen}
            className="card-img-top img-fluid"
            alt={item.nombre}
            style={{ objectFit: 'cover', height: '250px' }}
          />
          <div className="card-body text-center">
            <h5 className="card-title">{item.nombre}</h5>
            <p className="card-text fw-bold fs-3 text-primary">${item.precio}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
