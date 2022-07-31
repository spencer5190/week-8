import React, {  useState} from 'react';
import { Pokedex } from 'pokeapi-js-wrapper';
import PokedexSelector from './PokedexSelector';
import PokemonSelector from './PokemonSelector';
import './App.css';

const P = new Pokedex()

const App = () => {
  const [hasError, setErrors] = useState(null)
  const [pokedexSelected, setPokedexSelected] = useState(null)

  const backToPokedex = () => {
    setPokedexSelected(null)
  }

  return (
    <div>
      {hasError !==null ?
      <h1>There was an error</h1> : null}
      <h1>{pokedexSelected}</h1>
      {pokedexSelected === null ?
      <PokedexSelector setErrors={setErrors} P={P} setPokedexSelected={setPokedexSelected}/>
      : <PokemonSelector setErrors={setErrors} P={P} pokedexSelected={pokedexSelected} backToPokedex={backToPokedex}/>}
    </div>
  )
}

export default App;