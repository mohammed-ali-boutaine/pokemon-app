import PokemonCard from "../components/PokemonCard";
import { useEffect, useState } from "react";

const PokemonList = () => {
  let [pokemonsList, setPokemonsList] = useState([]);

  async function getAllPokemonWithDetails() {
    let allPokemon = [];
    let url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";

    // Fetch all Pokémon names & URLs (handling pagination)
    while (url) {
      const response = await fetch(url);
      const data = await response.json();

      allPokemon = allPokemon.concat(data.results);
      url = data.next; // API provides the next URL (null if no more pages)
    }

    // Fetch details for each Pokémon
    const detailedPokemon = await Promise.all(
      allPokemon.map(async (pokemon) => {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        return response.json();
      })
    );
    return detailedPokemon;
  }
  useEffect(() => {
    async function fetchData() {
      const data = await getAllPokemonWithDetails();
      setPokemonsList(data);
    }

    fetchData();
  }, []);
  let loading = false;
  return (
    <>
      <section className="min-h-[91vh]">
        <div className="px-16 py-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {!loading &&
            pokemonsList.map((pokemon, index) => {
              return <PokemonCard key={index} pokemon={pokemon} />;
            })}
        </div>
      </section>
    </>
  );
};

export default PokemonList;
