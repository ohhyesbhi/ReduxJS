
import Header from './components/Header';
import Pokemon from './components/pokemons/Pokemon';

import './App.css'
import { Routes,Route } from 'react-router-dom';
import PokemonDetails from './components/pokemons/PokemonDetails';


function App() {

  return (
 <>
<Header/>
<Routes>
  <Route path="/" element={<Pokemon/>}/> 
  <Route path="/pokemon" element={<PokemonDetails/>}/>
</Routes>
 </>
    
  )
}

export default App
