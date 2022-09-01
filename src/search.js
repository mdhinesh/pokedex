import React from 'react';
// import { useState} from 'react';
// import { fetchPokemon } from './getPokemon';

export default function Search(props){

    const [search, setSearch] = React.useState('');
    // console.log(search);
    

    return (
    <div className="search-container">
        <h1>{search}</h1>
        <form>
        <center>
            <i onClick={(e) => props.getPokemon(search)} class="fa-solid fa-magnifying-glass"></i>
            <input 
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Enter Pokemon Name..." size="60" id="searchbox" type="text" />
            {/* <button onClick={(e) => props.getPokemon(search)}>search</button> */}
        </center>
        </form>
        </div>
    )
}