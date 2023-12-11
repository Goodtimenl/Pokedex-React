import React from 'react';
import PokemonCard from './components/PokemonCard';
import "../src/App.css"

const App = () => {
  return (
    <div>
      <h1>Mon Application Pokémon</h1>
      <PokemonCard />
    </div>
  );
};

export default App;