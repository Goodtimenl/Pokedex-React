import React from 'react';
import PokemonCard from './components/PokemonCard';
import "../src/App.css"


function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

  return (
    <div className="app">
      {/* ... */}
      <PokemonCard pokemon={pokemonList[0]} />
    </div>
  );
}




export default App;