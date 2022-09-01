import React from 'react';
import Search from './search';
import { Route,Routes } from 'react-router-dom';
import Home from './Home';
import { fetchPokemon } from './getPokemon';
import Pokemon from './Pokemoncard';


const App = () => {
  
  console.log("I am called")
  const getPokemon = async (query) => {
    // console.log(query);
    const response = await fetchPokemon(query)
    // console.log(response)
    const results = await response.json()
    console.log(results)
  }


  return (
    <div className="container">
      <div className='header'>
        <span><a href="/">Pokédex</a></span>
        <p><a href="explore">Explore</a></p> 
      </div>
      <Routes>
        <Route path='/explore' element={<Search getPokemon={getPokemon} />} />
        <Route path='/' element={<Home />} />
      </Routes>
      
    </div>
    
  );
}

export default App;


// const [pokemon, setpokemon] = useState([]);

  // useEffect(() => {
  //   axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1").then(res => {
  //     setpokemon(res.data.results.map(p => p.name))
  //     console.log(res)
  //   })    
  // }, []);

  // // console.log(pokemon);
  // return (
  //   <div className="App">
  //     <Pokemon 
  //       key={index}
  //       id={pokemonStats.id}
  //       image={pokemonStats.sprites.other.dream_world.front_default}
  //       name={pokemonStats.name}
  //       type={pokemonStats.types[0].type.name} />
  //   </div>
  // );