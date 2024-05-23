import { useEffect, useState } from "react"
import arrayProductos from "./json/productos.json"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () =>{
    const [item, setItem] = useState([])
    const {id} = useParams()

    useEffect(() =>{
        const promesa = new Promise (resolve => {
            setTimeout(() => {
                const producto = arrayProductos.find(item => item.id === parseInt(id))
                resolve(producto)
            }, 2000)
        })
        promesa.then(respuesta => {
            setItem(respuesta)
        })


    }, [])


    return (
        <>
            <div className="container">
                <div className="row m-4 text-center">
                    <ItemDetail item={item} />
                </div>
            </div>
        
        </>
    )
}

export default ItemDetailContainer