import { useContext } from "react"
import ItemCount from "./ItemCount"
import { CartContext } from "./context/CartContext"

const ItemDetail = ({item}) => {
    const {addProducto} = useContext(CartContext)

    const onAdd = (cantidad) => {
        addProducto(item, cantidad);
    }

    return(
        <>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col">
                        <img src={item.imagen} alt={item.nombre} className="img-fluid" />
                    </div>
                    <div className="col">
                        <h1>{item.nombre}</h1>
                        <p className="fw-bold fs-2 p-3">${item.precio}</p>
                        <ItemCount stock={item.stock} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        
        </>
    )
}
export default ItemDetail