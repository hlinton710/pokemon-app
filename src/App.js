import AllPokemon from './components/allPokemon';

const App = () => {
  return (
    <div className="bg-gray-700">
      <div className='container mx-auto px-4 py-16'>
        <h1 className='text-4xl font-bold text-white text-center'>Personal Pokedex</h1>
        {/* search */}
        <div className="pt-6 space-x-2 text-center text-gray-600">
            <input id="search" className="border-2 border-gray-300 bg-white py-2 px-5 rounded-lg text-sm focus:outline-none"
              type="search" name="search" placeholder="Pokemon Name"  />
             <button type="submit" className="py-2 bg-gray-500 px-4 md:px-5 rounded-lg border-gray-300 border-2 text-sm text-white hover:bg-gray-700">
            Search
            </button> 
          </div>
          
          {/* pokemon grid */}
        <div className='py-16'>
          <AllPokemon />
        </div>
      </div>
    </div>
  );
};

export default App;