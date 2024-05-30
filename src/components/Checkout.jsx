import { useEffect, useState } from "react"
//import arrayProductos from "./json/productos.json"
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";

const Checkout = () => {

    const [cart, setCart] = useState([]);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("")
    const [orderId, setOrderId] = useState("")

    /*useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(arrayProductos)
            }, 2000)
        })
        promesa.then(respuesta => {
            setCart(respuesta)
        })


    }, [])*/


    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, "items")
        getDocs(itemsCollection).then(snapShot => {
            if (snapShot.size > 0){
                setCart(snapShot.docs.map(item => ({id:item.id, ...item.data()})))
            }
        })

    }, [])

    const realizarPedido = () => {
        const pedido = { nombre: nombre, email: email, telefono: telefono }
        const items = cart.map(item => ({ id: item.id, title: item.nombre, price: item.precio }))
        const order = { pedido: pedido, items: items, total: sumaTotal() }
        const db = getFirestore()
        const ordersCollection = collection(db, "orders")
        addDoc(ordersCollection, order).then(data => {
            setOrderId(data.id)
        })
        /*const itemsCollection = collection(db, "items")
        arrayProductos.forEach(item => {
            addDoc(itemsCollection, item)
        })*/

    }

    const sumaTotal = () => {
        return cart.reduce((acum, item) => acum += item.precio, 0)
    }





    return (
        <div className="container">
            <div className="row">
                <div className="col">
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
                        <button type="button" className="btn btn-primary" onClick={realizarPedido}>Realizar pedido</button>
                    </form>
                </div>
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={70} /></td>
                                    <td>{item.nombre}</td>
                                    <td> ${item.precio} </td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2}>Total:</td>
                                <td>$ {sumaTotal()} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {orderId ? <div className="alert alert-primary" role="alert">Compra realizada con éxito, tu número de orden es:  <b>{orderId}</b> </div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout