import { useEffect, useState } from "react"
import arrayProductos from "./json/productos.json"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore"

const ItemListContainer = () =>{
    const [items, setItems] = useState([])
    const {id} = useParams()


    /*useEffect(() =>{
        const promesa = new Promise (resolve => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria == id) : arrayProductos)
            }, 2000)
        })
        promesa.then(respuesta => {
            setItems(respuesta)
        })


    }, [id])*/

    /*useEffect(() => {
        const db = getFirestore()
        const productoDoc = doc(db, "items", "Jd5f0Kf4t4ta9NbjL4Ux")
        getDoc(productoDoc).then(snapShot => {
            if (snapShot.exists()){
                setItems({id:snapShot.id, ...snapShot.data() })
                console.log(items)
            }
        })

    }, [])*/

    /*useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, "items")
        getDocs(itemsCollection).then(snapShot => {
            if (snapShot.size > 0){
                setItems(snapShot.docs.map(item => ({id:item.id, ...item.data()})))
            }
        })

    }, [])*/


    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, "items")
        const queryCollection = query(itemsCollection, where("precio", ">", 4000))
        getDocs(queryCollection).then(snapShot => {
            if (snapShot.size > 0){
                setItems(snapShot.docs.map(item => ({id:item.id, ...item.data()})))
            }
        })

    }, [])

 



    return (
        <>
            <div className="container">
                <div className="row m-4 text-center">
                    <ItemList items={items} />
                    {/*<img src={items.imagen} alt={items.nombre} />
                    <p>{items.nombre}</p>
                    <p>${items.precio}</p>*/}
                </div>
            </div>
        
        </>
    )
}

export default ItemListContainer