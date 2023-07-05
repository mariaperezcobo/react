import './ItemListContainer.scss'

const MOCK_DATA = [
    {nombre: 'Calzas Lisboa', precio: 15000, imagen:'./imagenes/calzas2.png', alt:'calzas estampadas', id: 'lisboa', categoria: 'calzas'},
    {nombre: 'Calzas Londres', precio: 12000, imagen:'./imagenes/mujer estir.png', alt:'mujer estirando con calzas grises', id: 'londres',categoria: 'calzas'},
    {nombre:'Calzas Madrid', precio: 10000, imagen:'./imagenes/zapas2.png', alt:'calzas estampadas blancas y azules', id: 'madrid', categoria: 'calzas'},
    {nombre:'Top Miami', precio: 8000, imagen:'./imagenes/remera3.png', alt:'remera banca y gris',id: 'miami', categoria: 'remeras'},
   
]



export const ItemListContaier = ({propiedad}) => {

    const pedirDatos = () => {
        return new Promise ((resolve, reject) =>{
            setTimeout (()=>{
                resolve (MOCK_DATA)
            },2000)
        })
    }

    pedirDatos()
        .then((res)=>{
            console.log(res)
        })
        .catch ((error)=>{
            console.log(error)
        })

    return (
        <div className='catalogo_contenedor'>
            <p >{propiedad}</p>
        </div>
    )
}