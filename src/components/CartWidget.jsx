import { Link } from "react-router-dom"
import carrito from "../assets/images/cart2.svg"
import { CartContext } from "./context/CartContext"
import { useContext } from "react"

const CartWidget = () => {

    const {cantidadProductos} = useContext(CartContext)

    if(cantidadProductos() > 0 ) {
        return (
            <Link to={"/cart"} className="btn btn-primary position-relative ">
                <img src={carrito} alt="carrito" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cantidadProductos()}
                </span>
            </Link>
        )
    }

}

export default CartWidget