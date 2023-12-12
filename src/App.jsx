import React, { useState } from 'react';
import PokemonCard from './components/PokemonCard';
import "../src/App.css";
import NavBar from './components/NavBar'



function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];


  const [pokemonIndex, setPokemonIndex] = useState(0);
  const currentPokemon = pokemonList[pokemonIndex];

  const goToPreviousPokemon = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(prevIndex => prevIndex - 1);
    }
  };

  const goToNextPokemon = () => {
    setPokemonIndex((index) => (index < pokemonList.length - 1 ? index + 1 : index));
  };

  return (
    <div className="app">
      <PokemonCard pokemon={currentPokemon} />
      <NavBar previous={goToPreviousPokemon} next={goToNextPokemon} />
    </div>
  );
}


export default App;