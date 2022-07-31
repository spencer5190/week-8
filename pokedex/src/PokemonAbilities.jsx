import React from 'react'

const PokemonAbilities = ({pokemonDetails}) => {

    return (
        <div>
            {pokemonDetails !== null ? pokemonDetails.abilities.map(ability =>
                <h3>{ability.ability.name}</h3>) :
            null
        }
        </div>
    )
}

export default PokemonAbilities