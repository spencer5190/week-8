import React from 'react'

const PokemonType = ({pokemonDetails}) => {

    return (
    <div>
        {pokemonDetails !== null ? pokemonDetails.types.map(type =>
        <h3>{type.type.name}</h3>) : null
        }
    </div>
    )
}

export default PokemonType