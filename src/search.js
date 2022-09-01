import React from 'react';
import { useState} from 'react';
import { fetchPokemon } from './getPokemon';
import Pokemon from './Pokemoncard';


export default function Search(){

    const [search, setSearch] = React.useState('');

    const [pokemon, setpokemon] = useState();
    const [loading, setloading] = useState(false);

    const getPokemon = async (query) => {
        const response = await fetchPokemon(query);
        const results = await response.json();
        setpokemon(results);
        setloading(false);
    }

    return (
    <div className="search-container">
        <center>
            <i onClick ={(e) => getPokemon(search)} class="fa-solid fa-magnifying-glass"></i> 
            <input 
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Enter Pokemon Name..." 
                size="60" 
                id="searchbox" 
                type="text" 
            />
        </center>
        {!loading && pokemon ? (
            <Pokemon
              id={pokemon.id}
              image={pokemon.sprites.other.dream_world.front_default}
              name={pokemon.name}
              type={pokemon.types[0].type.name}
            />
          ): null}
        </div>
    )
}