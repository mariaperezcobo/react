import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import reactLogo from './assets/react.svg'
import reactLogo2 from './assets/logo2.png'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Header} from './components/Header/Header'
import { ItemListContaier } from './components/ItemListContainer/ItemListContainer'
import { Nosotros } from './components/Nosotros/Nosotros'
import { Error } from './components/Error/Error'


function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <Header />

          <Routes>
            <Route path="/" element={ <ItemListContaier/>}/>
            
            <Route path="/productos/:categoryId" element={ <ItemListContaier/>}/>
            <Route path="/nosotros" element={ <Nosotros />}/>
            <Route path="*" element={ <Error />}/>
          </Routes>

      </BrowserRouter>

  )
}

export default App
