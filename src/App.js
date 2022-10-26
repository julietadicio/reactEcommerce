import './App.css';
import 'primeicons/primeicons.css';

function App() {
  return (
    <>
      
      <nav>
        <p>Factor Tierra</p> 
        <ul>
          <li href="#">
            HOME
          </li>
          <li>
            TIERRA
          </li>
          <li>
            SEMILLAS
          </li>
          <li>
            FERTILIZANTES
          </li>
        </ul>
        <i className="pi pi-shopping-cart"></i>
      </nav>



      <div id="section1">
        <h1 class="title">FACTOR TIERRA</h1>
        <h1>Todo lo que necesitas para armar la huerta de tus sueños</h1>
        <a class="btn" href="#section3">Ir seccion3</a>
      </div>

      <div id="section2">
        <h2>seccion 2</h2>
      </div>

      <div id="section3">
        <h2>seccion 3</h2>
        <a href="#section1">Ir arriba</a>
      </div>

    </>
  );
}

export default App;

