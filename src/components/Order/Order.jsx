import './Order.scss'

export const Order = ({children}) =>{
    return (
        <div className="contenedorOrden">
            <div className="contenedorOrdenTexto">
                <div className='contenedorTituloOrden'>
                    Tu compra se realizó con éxito!!
                </div>
                <div >
                    <p className='contenedorNroOrden'>El numero de orden es:  <strong>{children}</strong> </p>
                </div>
                <div className='contenedorNroOrden2'>
                    <p >Te avisaremos cuando tu pedido este listo!</p>
                </div>
                <div className='contenedorNroOrden'>         
                     <img className="imagen" src="/calzas3.png" alt="mujer en la playa"/>
                 </div>
            </div>
                
            
        
       
      </div>
    )
}