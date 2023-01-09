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
      {/* Indicar los items que utilizara la props */}
      
      <Testimonio
      nombre = "Hello Kitty"
      pais = "China"
      cargo = "Jefe"
      empresa = "Spotify"
      imagen = "A"
      testimonio = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
      
      <Testimonio
      nombre = "Gatito"
      pais = "Japon"
      cargo = "CEO"
      empresa = "Toyota"
      imagen = "D"
      testimonio = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
      
      <Testimonio
      nombre = "Love"
      pais = "Francia"
      cargo = "Bosses"
      empresa = "Prada"
      imagen = "C"
      testimonio = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
      
      </div>
    </div>
  );
}

export default App;
