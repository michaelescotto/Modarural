import { useContext, useState } from "react"
import { CartContext } from "./context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("")
    const [orderId, setOrderId] = useState("")
    const { cart, sumaTotalProductos, cantidadProductos, limpiador } = useContext(CartContext)

    const realizarPedido = () => {

        if (nombre == "" || email == "" || telefono == "") {
            return false
        }

        const pedido = { nombre: nombre, email: email, telefono: telefono }
        const items = cart.map(item => ({ id: item.id, title: item.nombre, price: item.precio, quantity: item.cantidad }))
        const fecha = new Date()
        const fechaPedido = `${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
        const order = { date: fechaPedido, pedido: pedido, items: items, total: sumaTotalProductos() }

        const db = getFirestore()
        const ordersCollection = collection(db, "orders")
        addDoc(ordersCollection, order).then(data => {
            setOrderId(data.id)
            setEmail("")
            setNombre("")
            setTelefono("")
            limpiador()
        })
    }

    if (cantidadProductos() == 0 && !orderId) {
        return (
            <div className="container fs-2 text-center">
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
        <div className="container fs-3 py-5">
            {!orderId ?
                <div className="row">
                    <div className="col col-md-4">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Nombre</label>
                                <input type="text" className="form-control" onInput={(e) => { setNombre(e.target.value) }} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" onInput={(e) => { setEmail(e.target.value) }} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Teléfono</label>
                                <input type="text" className="form-control" onInput={(e) => { setTelefono(e.target.value) }} />
                            </div>
                            <button type="button" className="btn btn-primary fs-3 p-1 mt-3 mb-5" onClick={realizarPedido}>Realizar pedido</button>
                        </form>
                    </div>
                    <div className="col col-md-8">
                        <div className="table-responsive">
                            <table className="table">
                                <tbody>
                                    {cart.map(item => (
                                        <tr key={item.id}>
                                            <td><img src={item.imagen} alt={item.nombre} width={70} /></td>
                                            <td>{item.nombre}</td>
                                            <td>x {item.cantidad}</td>
                                            <td> ${item.precio} </td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td colSpan={3}>Total:</td>
                                        <td>$ {sumaTotalProductos()} </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div> : ""}

            <div className="row">
                <div className="col">
                    {orderId ? <div className="alert alert-primary" role="alert">Compra realizada con éxito, tu número de orden es:  <b>{orderId}</b> </div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout