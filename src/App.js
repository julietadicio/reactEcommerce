import './App.css';
import 'primeicons/primeicons.css';
import NavBar from './components/NavBar'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <>
      <NavBar />

      <ItemListContainer greeting='Todo lo que necesitas para armar la huerta de tus sueños' />

      <Section2 />

      <Section3 />

    </>
  );
}

export default App;