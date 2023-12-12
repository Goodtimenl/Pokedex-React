import React, { useState } from 'react';
import PokemonCard from './components/PokemonCard';
import "../src/App.css";



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
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <div className="app">
      <PokemonCard pokemon={currentPokemon} />
      {pokemonIndex > 0 && (
        <button onClick={goToPreviousPokemon}>Précédent</button>
      )}
      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={goToNextPokemon}>Suivant</button>
      )}
    </div>
  );
}


export default App;