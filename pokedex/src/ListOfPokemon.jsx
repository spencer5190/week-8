import React from 'react';

const ListOfPokemon = ({pokemonList, setPokemonSelected}) => {
    return (
        pokemonList.map(pokemon =>
            <tr>
                <td>{pokemon.pokemon_species.name}</td>
                <button onClick={() => setPokemonSelected(pokemon.pokemon_species.name)}>{pokemon.pokemon_species.name}</button>
            </tr>
            )
    )
}

export default ListOfPokemon