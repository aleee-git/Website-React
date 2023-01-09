import './App.css';
/* Importar componente JS a usar*/
/* EXPORTACION NOMBRADA OP. 2 = import {Testimonio} from "./componentes/Testimonio"; */
import Testimonio from "./componentes/Testimonio";

/* Indica nombre del componente*/
function App() {
  return (
    <div className="App">
      <div className= "principal">
      <h1> Testimonios de gatitos </h1>
      <Testimonio/>
      </div>
    </div>
  );
}

export default App;
