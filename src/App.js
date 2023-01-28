import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponentes } from './EventosComponentes';

function App() {
  const ficha_medica = {
    altura: '187 cm',
    grupo: 'A+',
    estado:'Bueno',
    Alergias:'Ninguno'
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hola mundo.
        </p>
        {/* Cargando mi primer componente */}
        <div className='componentes'>
          <hr/>
          <EventosComponentes/>
          <hr/>
          <TercerComponente 
            nombre="Silfredo" 
            apellido="Orozco"
            ficha={ficha_medica}
          />
          <hr/>
          <SegundoComponente/>
          <hr/>
          <MiComponente/>
        </div>
      </header>
    </div>
  );
}

export default App;
