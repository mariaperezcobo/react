import './Title.scss'

export const Title =({children}) =>{
    return (
    <div className='contenedorTituloPrincipal'>
        <h1 className='formatoTituloPrincipal'>{children}</h1>
    </div>
   
    )
}