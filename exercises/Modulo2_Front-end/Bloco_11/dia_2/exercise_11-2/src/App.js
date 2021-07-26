import './App.css';
import Pokedex from './components/Pokedex.js'
import data from './data';


function App() {
  return (
    <div className="App">
      <h1 className='header'>Pokedex</h1>
     <Pokedex pokemons={data}/>
     <button className='button'>Proximo</button>
    </div>
  );
}

export default App;
