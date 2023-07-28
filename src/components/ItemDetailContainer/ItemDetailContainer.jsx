import { useEffect , useState} from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.scss'
import { Loader } from "../Loader/Loader"
import {doc, getDoc} from "firebase/firestore"
import {db} from '../../firebase/config'

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()
    // console.log(itemId)
    // console.log(item)

    useEffect(() => {
        setLoading(true)

        //armar la referencia
        const itemRef = doc(db,"productos", itemId)
        //llamar la ref
        getDoc(itemRef)
            .then((doc) =>{
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })

        // pedirDatos()
        //     .then (r =>{
        //         setItem (r.find(producto => producto.id === itemId))
        //     }             
        //     )
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div >
            {
                loading 
                ? <Loader />
                : <ItemDetail item={item}/>
            }
        </div>
    )
}

