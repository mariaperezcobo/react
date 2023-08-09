import './Order.scss'

export const Order = ({children}) =>{
    return (
        <div className="contenedorOrden">
            <div className="contenedorOrdenTexto">
                <div className='contenedorTituloOrden'>
                    Tu compra se realizó con éxito!!
                </div>
                <div className='contenedorNroOrden'>
                    <p>El numero de orden es: <strong>{children}</strong> </p>
                    <p>Te avisaremos cuando tu pedido este listo!</p>
                </div>  
                <div className='contenedorNroOrden2'>         
                     <img className="imagen" src="/calzas3.png" alt="mujer en la playa"/>
                 </div>
            </div>
                
            
        
       
      </div>
    )
}