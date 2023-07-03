import { useState } from 'react'
import reactLogo from './assets/react.svg'
import reactLogo2 from './assets/logo2.png'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Header} from './components/Header/Header'
import { ItemListContaier } from './components/ItemListContainer/ItemListContainer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <Header />
         <ItemListContaier propiedad = {"Nueva pagina web - React Coder House"}/>
    
    </>
  )
}

export default App
