import Carousel from 'react-bootstrap/Carousel';
import './CarouselInicio.scss'
import { Title } from '../Title/Title';

export const CarouselInicio = () =>{
    return (
        <div >

          <Title>Fitness Ropa Deportiva</Title>
          
          <div className='contenedor_Carousel'>
            <div className='contenedor_Carousel2'>
                <Carousel >
                  <Carousel.Item>
                    <img 
                      className="d-block w-100 img_carrousel"
                      src="/ropa960.png"
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="/running9902.png"
                      alt="Second slide"
                    />
                    
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="/playa990.png"
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
            </div>
          </div>
        </div>

    )

}