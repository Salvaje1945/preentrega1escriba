import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';

function App() {
  const greeting = "El gritin' que hay que renderizar, creo."
  return (
    <div id="contenedor">
      <header id="cabecera">
        <NavBar />
      </header>
      <main id="contenido">
        <ItemListContainer props = {greeting} />
      </main>
      <footer id="pie">
        <h3>Soy el pie, y NO tengo olor a pata</h3>
      </footer>
    </div>
  );
}

export default App;
