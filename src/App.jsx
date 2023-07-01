import { useState } from 'react'
import reactLogo from './assets/react.svg'
import reactLogo2 from './assets/logo2.png'
import viteLogo from '/vite.svg'
import './App.css'
import {Header} from './components/Header/Header'
import { ItemListContaier } from './components/ItemListContainer/ItemListContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <Header />
         <ItemListContaier propiedad = {"Nueva pagina web"}/>
         <p>hola mundo</p>
         <img className="logo" src={reactLogo}></img> 
         <img className="logo" src={reactLogo2}></img> 
     
    
    </>
  )
}

export default App
