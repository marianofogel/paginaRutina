
import fotoMarian from './assets/img/marian.png'
import fotoMati from './assets/img/mati.png'
import { Popup } from './popup'
import './App.css'
import { useState } from 'react'

function App() {

const [botonMes, setMes] = useState (false)


const botonEntrar = () => {
  setMes (!botonMes)
}

  return (
    <>
      <div className='iniciodepagina'>

        <img src={fotoMati} alt="FOTO DE MATI" className='foto-mati' width={230} height={300} />
        <h1>Pagina de prueba</h1>

        
        <img src={fotoMarian} alt="FOTO DE MARIAN" className='foto-marian' width={230} height={300} />
        
        

      </div>
      <button onClick={botonEntrar}>julio</button>
      <Popup 
      abierto = {botonMes}
      cerrar = {botonEntrar}/>
      
      

     
      

      
    </>
  )
}

export default App
