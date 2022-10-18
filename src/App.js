import './App.css';

function App() {
  return (
    <>

      <nav>
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
      </nav>

      <div id="section1">
        <h1>FACTOR TIERRA</h1>
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

