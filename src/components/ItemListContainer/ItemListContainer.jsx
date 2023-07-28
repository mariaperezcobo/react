import './ItemListContainer.scss'
import {useEffect, useState} from 'react'
// import { pedirDatos } from '../../helpers/pedirDatos';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/config'

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    console.log(productos)

    const {categoryId} = useParams()
    console.log(categoryId)

    useEffect (()=> {
        setLoading(true)

        //armar la referencia (sync)
        const productosRef = collection(db, "productos")
        //llamar a esa ref (async)
        getDocs(productosRef)
            .then((resp)=>{
                const docs = resp.docs.map((doc) => {
                    return{
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setProductos(docs)
                console.log(docs)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false) )

        }, [categoryId])

    //     pedirDatos()
    //     .then(r => {
    //        if (categoryId) {
    //         setProductos (r.filter(prod => prod.categoria === categoryId))
    //        } else  {
    //         setProductos(r)
    //        }
    //     })
    //     .catch (error => console.log(error))
    //     .finally(()=> setLoading(false))
    // }, [categoryId])


    return (
        <div>
            {
                loading
                ? <Loader />
                :    <div className='contenedor'>
                        <div className='contenedorTitulo'>
                            <h1 className='tituloPrincipal'>
                            {categoryId ? categoryId.toUpperCase() : "Todos los productos"}
                            </h1> 
                        </div>
                        <div className='contenedorProductos'>
                            <ItemList productos={productos}/>
                        </div>
                    </div>
            }
         
        </div>
     
        
      
       
    )
}