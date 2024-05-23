import { useEffect, useState } from "react"

const ItemCount = ({stock}) => {
    const [contador, setContador] = useState(1)

    const [stockProductos, setStockProductos] = useState (stock)

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

    const onAdd = () => {
        if (contador <= stockProductos) {
            setStockProductos(stockProductos-contador);
            alert("Se agregó "+contador+" al carrito")
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
                        <button type="button" className="btn btn-primary" onClick={onAdd} >Agregar producto</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemCount