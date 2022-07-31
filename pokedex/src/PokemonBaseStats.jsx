import React from "react"

const PokemonBaseStats = ({pokemonDetails}) => {

    return (
        <div>
            {pokemonDetails !== null ? pokemonDetails.stats.map(stat =>
            <h3>{stat.stat.name} : {stat.base_stat}</h3>) : null
            }
        </div>
    )
}

export default PokemonBaseStats