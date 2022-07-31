import React, { useState, useEffect} from 'react';
import PokemonPhoto from './PokemonPhoto';
import PokemonAbilities from './PokemonAbilities';
import PokemonBaseStats from './PokemonBaseStats.jsx';
import PokemonType from './PokemonType';

const PokemonDetails = ({ setErrors, P, pokemonSelected, goBack }) => {
    const [pokemonDetails, setPokemonDetails] = useState(null)
    const getPokemonData = async () => {
        try {
            const response = (await P.getPokemonByName(pokemonSelected))
            setPokemonDetails(response)
        }
        catch (e) {
            setErrors("Error on list of pokemon : " + e.message)
        }
    }

    useEffect(() => {
        getPokemonData();
    }, [P, setErrors])

    return (
        <div>
            <PokemonPhoto pokemonDetails={pokemonDetails}/>
            <PokemonAbilities pokemonDetails={pokemonDetails}/>
            <PokemonBaseStats pokemonDetails={pokemonDetails}/>
            <PokemonType pokemonDetails={pokemonDetails}/>
            <button onClick={() => goBack()}>Go Back</button>
        </div>
    )
}

export default PokemonDetails