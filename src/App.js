import './App.css';
import logo from './imgs/logo.png';
import Boton from './componentes/Boton.jsx';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [nClicks, setNClicks] = useState(0);

  const hizoClick = () => {
    setNClicks(nClicks + 1);
  }

  const reiniciarContador = () => {
    setNClicks(0);
  }


  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
           className='logo'
           src={logo}
           alt='Mi logo'/>
      </div>
      <div className='contenedor-contador'>
        <Contador numClicks={nClicks} />
        <div className='contenedor-botones'>
        <Boton 
          texto='Click'
          esBotonDeClick={true}
          manejarClic={hizoClick}
        />
        <Boton 
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClic={reiniciarContador}
        />
        </div>
      </div>
    </div>
  );
}

export default App;
