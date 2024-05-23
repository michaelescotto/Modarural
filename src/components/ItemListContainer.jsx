import { useEffect, useState } from "react"
import arrayProductos from "./json/productos.json"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () =>{
    const [items, setItems] = useState([])
    const {id} = useParams()


    useEffect(() =>{
        const promesa = new Promise (resolve => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria == id) : arrayProductos)
            }, 2000)
        })
        promesa.then(respuesta => {
            setItems(respuesta)
        })


    }, [id])


    return (
        <>
            <div className="container">
                <div className="row m-4 text-center">
                    <ItemList items={items} />
                </div>
            </div>
        
        </>
    )
}

export default ItemListContainer