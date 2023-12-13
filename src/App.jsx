import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    if (pokemonIndex === 0) {
      alert('hello pokemon trainer :)');
    } else if (currentPokemon.name === 'pikachu') {
      alert('pika pikachu !!!');
    }
  }, [pokemonIndex, currentPokemon]);


  return (
    <div className="app">
      <PokemonCard pokemon={currentPokemon} />
      <NavBar pokemonList={pokemonList} onPokemonClick={setPokemonIndex} />
    </div>
  );
}


export default App;