import React, {useEffect, useState} from 'react';
import PokemonDetails from './PokemonDetails.jsx';
import ListOfPokemon from './ListOfPokemon';

const PokemonSelector = ({setErrors, P, pokedexSelected, backToPokedex}) => {

    const [pokemonList, setPokemonList] = useState([])
    const [pokemonSelected, setPokemonSelected] = useState(null);

    const getPokemonInfo = async () => {
        try {
            const response = (await P.getPokedexByName(pokedexSelected)).pokemon_entries;
            setPokemonList(response)
        }
        catch (e) {
            setErrors("Error for list of pokemon : " + e.message)
        }
    }
    
    useEffect(() => {
        getPokemonInfo();
    }, [P, setErrors])

    const goBack = () => {
        setPokemonSelected(null);
    }

    const returnToPokedex = () => {
        if (pokemonSelected === null) {
            return (
                <div>
                    <ListOfPokemon pokemonList={pokemonList} setPokemonSelected={setPokemonSelected} P={P} setErrors={setErrors} />
                    <button onClick={() => backToPokedex()}>Go Back</button>
                    
                </div>
            )
        }
else {
    return (
        <PokemonDetails P={P} setErrors={setErrors} pokemonSelected={pokemonSelected} goBack={goBack} />
    )
}

    }
    return (
        returnToPokedex()
    )
}



export default PokemonSelector;