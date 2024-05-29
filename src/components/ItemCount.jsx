import { useEffect, useState } from "react"

import {Link} from "react-router-dom"

const ItemCount = ({stock, onAdd}) => {
    const [contador, setContador] = useState(1)

    const [stockProductos, setStockProductos] = useState (stock)

    const [visible, setVisible] = useState(true)

    const aumentar = () => {
        if (contador<stockProductos) {
            setContador(contador+1)
        }
    }

    const reducir = () => {
        if (contador>1) {
            setContador(contador-1)
        }
    }

    const agregarCarrito = () => {
        if (contador <= stockProductos) {
            setStockProductos(stockProductos-contador);
            setContador(1)
            onAdd(contador)
            setVisible(false)
        }
    }


    useEffect(() => {
        setStockProductos(stock);
    }, [stock])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <div className="btn-group m-1" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-primary" onClick={aumentar}>+</button>
                            <button type="button" className="btn btn-primary">{contador}</button>
                            <button type="button" className="btn btn-primary" onClick={reducir}>-</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col  text-center">
                        {visible ? <button type="button" className="btn btn-primary" onClick={agregarCarrito} >Agregar producto</button> : 
                        <Link to={"/cart"} className="btn btn-primary">Finalizar la compra</Link>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemCount