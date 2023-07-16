import Carousel from 'react-bootstrap/Carousel';
import './CarouselInicio.scss'

export const CarouselInicio = () =>{
    return (
        <div >
          <div className='contenedorTitulo'>
            <h1 className='tituloPrincipal'>Fitness Ropa Deportiva</h1>
          </div>
          <div className='contenedor_Carousel'>
            <div className='contenedor_Carousel2'>
                <Carousel >
                  <Carousel.Item>
                    <img 
                      className="d-block w-100 img_carrousel"
                      src="../../public/ropa960.png"
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="../../public/running9902.png"
                      alt="Second slide"
                    />
                    
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="../../public/playa990.png"
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
            </div>
          </div>
        </div>

    )

}