import { useState } from 'react'
import reactLogo from './assets/react.svg'
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
           
     
    
    </>
  )
}

export default App
