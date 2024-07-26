
import fotoMarian from './assets/img/marian.png'
import fotoMati from './assets/img/mati.png'
import { Tabla } from './tabla'
import './App.css'

function App() {


  return (
    <>
      <div className='iniciodepagina'>

        <img src={fotoMati} alt="FOTO DE MATI" className='foto-mati' width={230} height={300} />
        <h1>Pagina de prueba</h1>

        
        <img src={fotoMarian} alt="FOTO DE MARIAN" className='foto-marian' width={230} height={300} />
        
        

      </div>
      
      <section className='mes'>
        <div className='text'>
            <h2>Nombre del mes</h2>
          <header className='popup-mes'>
            <Tabla />
          </header>
          <footer>
            <button className='text'>Salir</button>
          </footer>
         </div>
      </section>

      

      
    </>
  )
}

export default App
