import './ItemListContainer.scss'
import {useEffect, useState} from 'react'
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { Title } from '../Title/Title';

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect (()=> {
        setLoading(true)

        //armar la referencia (sync)
        const productosRef = collection(db, "productos")
        const q = categoryId
                    ? query(productosRef, where('categoria', '==', categoryId))
                    : productosRef
        //llamar a esa ref (async)
        getDocs(q)
            .then((resp)=>{
                const docs = resp.docs.map((doc) => {
                    return{
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setProductos(docs)
                
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false) )

        }, [categoryId])

       return (
        <div>
            {
                loading
                ? <Loader />
                :    <div >
                        <Title>{categoryId ? categoryId.toUpperCase() : "Todos los productos"}</Title>  
                        
                       
                        <div className='contenedorProductos'>
                            <ItemList productos={productos}/>
                        </div>
                    </div>
            }
         
        </div>
     
        
      
       
    )
}