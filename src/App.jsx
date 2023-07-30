
import {BrowserRouter, Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Header} from './components/Header/Header'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Nosotros } from './components/Nosotros/Nosotros'
import { Error } from './components/Error/Error'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import { CarouselInicio } from './components/CarouselInicio/CarouselInicio'
import { CartProvider } from "./context/CartContext";
import { CartView } from "./components/CartView/CartView";
import { Contacto } from './components/Contacto/Contacto'


function App() {
 

  return (

    <CartProvider>

        <BrowserRouter>
              <Header />

              <Routes>
                  <Route path="/" element={<CarouselInicio/>}/>
                  <Route path="/todos" element={ <ItemListContainer/>}/>
                  <Route path="/productos/:categoryId" element={ <ItemListContainer/>}/>
                  <Route path="/detail/:itemId" element={ <ItemDetailContainer/>}/>
                  <Route path="/nosotros" element={ <Nosotros />}/>
                  <Route path="/contacto" element={ <Contacto />}/>
                  <Route path="/cart" element={ <CartView />}/>
                  <Route path="*" element={ <Error />}/>
                </Routes>

            </BrowserRouter>
    </CartProvider>
   


  )
}

export default App
