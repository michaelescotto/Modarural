import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src={item.imagen} alt={item.nombre} className="img-fluid" />
                    </div>
                    <div className="col">
                        <h1>{item.nombre}</h1>
                        <p className="fw-bold">${item.precio}</p>
                        <ItemCount stock={item.stock} />
                    </div>
                </div>
            </div>
        
        </>
    )
}
export default ItemDetail