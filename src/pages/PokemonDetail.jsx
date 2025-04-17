import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

// Assuming you have a similar typeColor utility
// import { typeColor } from './utils/colors';

function PokemonDetail() {


  let {name} = useParams()

  const [pokemon, setPokemon] = useState();

  let url = `https://pokeapi.co/api/v2/pokemon/${name}`

  fetch(url).then(res => res.json()).then(setPokemon)


  // We're using Bulbasaur data but making the component work with any Pokemon
  const [activeTab, setActiveTab] = useState('about');
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const playCry = (cryUrl) => {
    if (!cryUrl) return;
    
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
      } else {
        audioRef.current.src = cryUrl;
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('ended', () => {
        setIsPlaying(false);
      });
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  // Extract types if available
  const types = pokemon?.types || [];
  // const mainType =  'normal';
  const mainColor =  '#A8A878'; // Default to normal type color

  // Format abilities
  const formatAbilities = (abilities) => {
    if (!abilities || !abilities.length) return [];
    
    return abilities.map(item => ({
      name: item.ability.name,
      isHidden: item.is_hidden
    }));
  };

  const formattedAbilities = formatAbilities(pokemon?.abilities);

  // Extract game versions
  const gameVersions = pokemon?.game_indices?.map(index => index.version.name) || [];

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-xl shadow-md">
      <audio ref={audioRef} className="hidden" />
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center mb-6">
        <div className="w-full md:w-1/2 flex justify-center">
          <div 
            className="relative w-64 h-64 rounded-full flex items-center justify-center"
            style={{
              background: `radial-gradient(circle, ${mainColor}40 0%, ${mainColor}15 70%)`,
              border: `2px solid ${mainColor}30`
            }}
          >
            <img
              src={
                pokemon?.sprites?.other?.home?.front_default ||
                pokemon?.sprites?.front_default ||
                "/api/placeholder/250/250"
              }
              alt={`${pokemon?.name || 'Bulbasaur'}`}
              className="w-60 h-60 object-contain z-10"
            />
          </div>
        </div>
        
        <div className="w-full md:w-1/2 p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold capitalize">{pokemon?.name || 'Bulbasaur'}</h1>
            <p className="text-xl font-bold text-gray-500">#{pokemon?.id || '001'}</p>
          </div>
          
          {/* Types */}
          <div className="my-4 flex gap-2">
            {types.map((typeInfo, index) => (
              <span
                key={index}
                className="px-4 py-1 rounded-full text-sm font-semibold text-white capitalize"
                style={{ backgroundColor:  '#6c757d' }}
              >
                {typeInfo?.type?.name || ''}
              </span>
            ))}
          </div>
          
          {/* Physical Attributes */}
          <div className="grid grid-cols-3 gap-4 my-4">
            <div className="text-center">
              <p className="text-sm text-gray-500">Height</p>
              <p className="font-bold">{(pokemon?.height || 7) / 10} m</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">Weight</p>
              <p className="font-bold">{(pokemon?.weight || 69) / 10} kg</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">Base XP</p>
              <p className="font-bold">{pokemon?.base_experience || 64}</p>
            </div>
          </div>
          
          {/* Sound Buttons */}
          {pokemon?.cries && (
            <div className="flex gap-4 mt-4">
              <button
                onClick={() => playCry(pokemon.cries.latest)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center gap-2 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                </svg>
                Latest Cry
              </button>
              <button
                onClick={() => playCry(pokemon.cries.legacy)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center gap-2 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>
                Legacy Cry
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex gap-8">
          <button
            onClick={() => setActiveTab('about')}
            className={`py-3 px-1 font-medium ${
              activeTab === 'about'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            About
          </button>
          <button
            onClick={() => setActiveTab('abilities')}
            className={`py-3 px-1 font-medium ${
              activeTab === 'abilities'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Abilities
          </button>
          <button
            onClick={() => setActiveTab('games')}
            className={`py-3 px-1 font-medium ${
              activeTab === 'games'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Games
          </button>
        </nav>
      </div>
      
      {/* Tab Content */}
      <div className="p-4">
        {activeTab === 'about' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Pokémon Data</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-2">Species</h3>
                <p className="capitalize">{pokemon?.species?.name || 'Seed Pokémon'}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-2">Forms</h3>
                <div className="flex flex-wrap gap-2">
                  {pokemon?.forms?.map((form, index) => (
                    <span key={index} className="capitalize">{form.name}</span>
                  )) || 'Standard Form'}
                </div>
              </div>
              {pokemon?.stats && (
                <div className="bg-gray-50 p-4 rounded-lg md:col-span-2">
                  <h3 className="font-semibold text-gray-700 mb-2">Base Stats</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {pokemon.stats.map((stat, index) => (
                      <div key={index}>
                        <p className="text-sm text-gray-500 capitalize">{stat.stat.name.replace('-', ' ')}</p>
                        <div className="flex items-center">
                          <span className="font-bold mr-2">{stat.base_stat}</span>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        
        {activeTab === 'abilities' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Abilities</h2>
            <div className="grid gap-4">
              {formattedAbilities.map((ability, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold capitalize">{ability.name.replace('-', ' ')}</h3>
                    {ability.isHidden && (
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                        Hidden
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    {ability.description || `The Pokémon's ${ability.name} ability gives it special powers.`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'games' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Game Appearances</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {gameVersions.map((version, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded-lg text-center capitalize">
                  {version}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PokemonDetail;