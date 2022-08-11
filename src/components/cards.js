import React from 'react';

const PokemonCard = (props) => {
  console.log(props.id);
  return (
    <div className='bg-white rounded-lg p-6 border-2 border-gray-300'>
        <span className='text-center uppercase text-black text-sm'></span>
      <h3 className='text-center capitalize font-semibold text-gray-700'>{props.name}</h3>
    </div>
  );
};

export default PokemonCard;