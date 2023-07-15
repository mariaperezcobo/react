import { useEffect , useState} from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.scss'


export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()
    console.log(itemId)
    console.log(item)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then (r =>{
                setItem (r.find(producto => producto.id === itemId))
            }             
            )
            .finally(() => setLoading(false))
    }, [])

    return (
        <div>
            
            {
                loading 
                ? <p className="cargando">Cargando..</p>
                : <ItemDetail item={item}/>
            }
            
          
        </div>
    )


}
    
