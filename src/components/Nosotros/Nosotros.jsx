import './Nosotros.scss'


export const Nosotros = () =>{
    return (
        <div >
             <div className='contenedorTitulo'>
                <h1 className='tituloPrincipal'>Acerca de Nosotros</h1>
            </div>
           
          
           

                 <div className='contenedor_Nosotros'>
            

                    <div className='contenedorFotoyTexto'>
                        <div className='contenedorTexto'>
                            <p class="texto2"> Fitness surgió a finales de 2020. Después de la primera ola de covid, nos dimos cuenta que queriamos crear ropa cómoda, práctica y canchera, que sirva tanto para hacer ejercicio como para uso urbano.</p>
                            <p class="texto2"> Elegimos especialmente todas las telas buscando la mas alta calidad.</p>
                            <p class="texto2"> Nuestro objetivo es llegar a la mayor cantidad de gente, y que la marca sea reconocida por la calidad y los modelos de nuestros productos.</p>

                        </div>
                            <div className='contenedorFoto'>
                                
                                <img className="imagen" src="/mujer estir.png" alt="mujer estirando"/>
                            </div>
                            
                    </div>
            </div>
          
        </div>
)
    
}