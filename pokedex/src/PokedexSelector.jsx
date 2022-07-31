import React, { useEffect, useState } from 'react'

const PokedexSelector = ({ setErrors, P, setPokedexSelected }) => {

    const [pokedexOptions, setPokedexOptions] = useState([]);

    const fetchPokedexData = async () => {
        try {
            const response = (await P.getPokedexsList()).results;
            setPokedexOptions(response);
        } catch (e) {
            setErrors("Error, list of pokedex : " + e.message);
        }
    };

    useEffect(() => {
        fetchPokedexData();
    }, [P, setErrors]);

   

    const getMapped = (input) => {
        return (
            input.map(pokedex =>
                <button className='grid-item' onClick={() => setPokedexSelected(pokedex.name)}>
                    {pokedex.name}
                </button>
            )
        )
    }

    return (
        <div className='grid-container'>
            {getMapped(pokedexOptions)}
        </div>
    )
}

export default PokedexSelector