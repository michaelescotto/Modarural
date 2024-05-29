import { useContext } from "react"
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {
    const {cart, removeProducto, limpiador, sumaTotalProductos, cantidadProductos} = useContext(CartContext)

    if (sumaTotalProductos() == 0 ){
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="alert alert-primary" role="alert">
                            <h2>No hay productos agregados en el carrito</h2>
                            <Link to={"/"} className="btn btn-primary"> Ir al inicio </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={120}/></td>
                                    <td>{item.nombre}</td>
                                    <td>${item.precio}</td>
                                    <td>{item.cantidad}</td>
                                    <td><button className="btn btn-primary" onClick={ () => removeProducto(item.id)}>Quitar</button></td>
                                </tr>
                            ))}
                            <tr>
                                <td><button className="btn btn-primary" onClick={limpiador}>Vaciar el carrito</button></td>
                            </tr>
                            <tr>
                                <td colSpan={2}>Total</td>
                                <td>${sumaTotalProductos()}</td>
                                <td><Link to={"/checkout"} className="btn btn-primary">Checkout</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Cart