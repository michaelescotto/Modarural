import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import Loading from "./Loading"

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const { id } = useParams()
    const [visible, setVisible] = useState(true)

    useEffect(() => {
    const db = getFirestore()
    const productoDoc = doc(db, "items", id)
    getDoc(productoDoc).then(snapShot => {
        if (snapShot.exists()){
            setItem({id:snapShot.id, ...snapShot.data() })
            setVisible(false)
    
        }
    })

}, [id])


    return (
        <>
            <div className="container">
                <div className="row m-4 text-center">
                    {visible ? <Loading /> : <ItemDetail item={item} /> }  
                </div>
            </div>

        </>
    )
}

export default ItemDetailContainer