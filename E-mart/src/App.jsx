import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Component/Header.jsx'
import Product from './Component/Product/Product.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
      <Product/>

    </>
  )
}

export default App
