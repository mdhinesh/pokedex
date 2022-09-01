import React from 'react';
import { useState, useEffect } from 'react';
import Pokemon from './Pokemoncard';


function Home(props) {

    const[allPokemons, setAllPokemons] = useState([])
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=10')

    const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(result)  {
      result.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        setAllPokemons( currentList => [...currentList, data])
        // await allPokemons.sort((a, b) => a.id - b.id)
      })
    }
    createPokemonObject(data.results)
    await console.log(allPokemons)
    }

    useEffect(() => {
    getAllPokemons()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="app-container">
            <div className="pokemon-container">
            <div className="all-container">
                {allPokemons.map( (pokemonStats, index) => 
                <Pokemon
                    id={pokemonStats.id}
                    image={pokemonStats.sprites.other.dream_world.front_default}
                    name={pokemonStats.name}
                    type={pokemonStats.types[0].type.name}
                    key={index}
                />)}
            </div>
            <button className="load-more" onClick={() => getAllPokemons()}>Load more</button>
            </div>
      </div>
    );
}

export default Home;