import React, { useState, useEffect } from 'react';
import PokemonCard from './cards';
import { getPokemons } from '../services/pokemon';

const AllPokemon = () => {
  const [pokemons, setPokemons] = useState([
  ]);

  useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data);
    });
  }, []);

  return (
    <div className='grid md:grid-cols-4 lg:grid-cols-5 gap-10'>
      {Object.entries(pokemons)[3] &&
        Object.entries(pokemons)[3][1].map((pokemon, index) => {
          return <PokemonCard key={index} {...pokemon}/>;
        })}    
    </div>
  );
};

export default AllPokemon;