import React from 'react';
import Search from './search';
import { Route,Routes,Link } from 'react-router-dom';
import Home from './Home';

const App = () => {

  return (
    <div className="container">
      <div className='header'>
        <span><Link to="/">Pokédex</Link></span>
        <p><Link to="/explore">Explore</Link></p> 
      </div>
      <Routes>
        <Route path='/explore' element={<Search />}/>
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