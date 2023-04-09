import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
<div className='contenedor-pricipal'>
      <h1>Esto es lo que dicen los chirris Testimomios </h1>
     <Testimonio
     nombre='Luis Cuzumbo'
     pais='Sobeland'
     imagen='tendon'
     cargo='Campanero'
     empresa='lovaina'
     testimonio='Me toco tirarme del barco durisimo' />

<Testimonio
     nombre='Pedro carranga'
     pais='Sobeland'
     imagen='momia'
     cargo='Campanero'
     empresa='lovaina'
     testimonio='Me toco tirarme del barco durisimo' />
     </div> 
    </div>
  );
}

export default App;


