import { useContext } from "react"
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {
    const { cart, removeProducto, limpiador, sumaTotalProductos, } = useContext(CartContext)

    if (sumaTotalProductos() == 0) {
        return (
            <div className="container d-flex justify-content-center align-items-center text-center p-5" >
                <div className="row">
                    <div className="col">
                        <div className="alert alert-primary p-5 m-5" role="alert">
                            <h2>No hay productos agregados en el carrito</h2>
                            <Link to={"/"} className="btn btn-primary p-2 m-2 fs-2"> Ir al inicio </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container fs-3 text-center">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={250} /></td>
                                    <td>{item.nombre}</td>
                                    <td>${item.precio}</td>
                                    <td>x {item.cantidad}</td>
                                    <td>${item.precio * item.cantidad}</td>
                                    <td><button className="btn btn-danger fs-4" onClick={() => removeProducto(item.id)}>Quitar</button></td>
                                </tr>
                            ))}

                            <tr>
                                <td colSpan={3}>Total</td>
                                <td>${sumaTotalProductos()}</td>
                                <td><Link to={"/checkout"} className="btn btn-success fs-4 px-5">Checkout</Link></td>
                                <td><button className="btn btn-warning fs-4 px-3" onClick={limpiador}>Limpiar</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Cart