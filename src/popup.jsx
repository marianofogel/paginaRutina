import { Tabla } from "./tabla"

export function Popup({ abierto, cerrar }) {
  if (abierto)

    return (
      <section className='mes'>
        <div className='text'>
          <h2>Nombre del mes</h2>
          <header className='popup-mes'>
            <Tabla />
          </header>
          <footer>
            <button onClick={cerrar} className='text'>Salir</button>
          </footer>
        </div>
      </section>
    )
  else {
    null
  }
}