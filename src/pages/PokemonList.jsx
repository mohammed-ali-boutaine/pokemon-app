import { useNavigate } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";
import { useEffect, useState, useRef } from "react";
import Navbar from "../components/NavBar";

const PokemonList = () => {
  // console.log();
  const [filtered, setFiltered] = useState([]);
  const navigate = useNavigate();
  const [pokemonsList, setPokemonsList] = useState([]);
  const [page, setPage] = useState(0); // Each page = offset
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);
  const limit = 20;

  const handleSearch = (query) => {
    const filteredResults = pokemonsList.filter(pokemon =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(filteredResults);
  };


  // Fetch a single page of pokemon + their details
  async function getPokemonWithDetails(offset = 0) {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    const data = await response.json();
    const detailedPokemon = await Promise.all(
      data.results.map(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        return res.json();
      })
    );

    return {
      pokemons: detailedPokemon,
      next: data.next,
    };
  }

  useEffect(() => {
    const fetchData = async () => {
      const { pokemons, next } = await getPokemonWithDetails(page * limit);
      setPokemonsList((prev) => [...prev, ...pokemons]);
      if (!next) setHasMore(false);
    };

    fetchData();
  }, [page]);

  // IntersectionObserver to load more when bottom is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1 }
    );

    const currentLoader = loaderRef.current;
    if (currentLoader) observer.observe(currentLoader);

    return () => {
      if (currentLoader) observer.unobserve(currentLoader);
    };
  }, [hasMore]);

  const  onNavigate = (path) => {
    navigate(path)
  }

  // {pokemonsList.map((pokemon, index) => (
  //   <PokemonCard key={index} pokemon={pokemon} onNavigate={onNavigate}/>
  // ))}
  return (
    <>
    <Navbar onSearch={handleSearch}/>
      <section className="min-h-[91vh]">
        <div className="px-16 py-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {(filtered.length > 0 ? filtered : pokemonsList).map((pokemon,index) => (
        <PokemonCard key={index} pokemon={pokemon} onNavigate={onNavigate}/>
      ))}
        </div>
        <div ref={loaderRef} className="text-center p-4 text-gray-500">
          {hasMore ? "Loading more Pokémon..." : "No more Pokémon"}
        </div>
      </section>
    </>
  );
};

export default PokemonList;
