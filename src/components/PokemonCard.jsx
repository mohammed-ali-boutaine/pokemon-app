import { useState } from "react";
// Import the color utility
import { getTypeColor } from "../utils/colors";

function PokemonCard({ pokemon, onNavigate }) {
  // console.log(pokemon);

  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const handleAction = (action) => {
    if (action === "like") {
      setLiked(!liked);
    } else if (action === "bookmark") {
      setBookmarked(!bookmarked);
    }
  };

  const handleNavigate = (path) => {
    if (onNavigate) {
      onNavigate(path);
    }
  };

  return (
    <div className="relative p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 bg-white rounded-tl-xl rounded-tr-xl">
          <button
            className={`p-2 w-10 h-10 text-xl flex items-center justify-center rounded-full border-2 transition-all duration-200
               ${
                 liked
                   ? "text-[#fd4878] border-[#fd4878]"
                   : "text-gray-300 border-gray-300 hover:text-[#fd4878] hover:border-[#fd4878]"
               }`}
            onClick={() => handleAction("like")}
            aria-label={liked ? "Unlike" : "Like"}
          >
            {liked ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-5.201-3.355 8.346 8.346 0 01-1.756-2.12 5.382 5.382 0 01-.584-4.161c.3-1.198 1.043-2.269 2.086-3.008a5.567 5.567 0 016.927 0c1.043.74 1.787 1.81 2.086 3.008.36 1.435.081 2.928-.584 4.16a8.349 8.349 0 01-1.756 2.12 15.247 15.247 0 01-5.201 3.356l-.022.012-.007.003z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            )}
          </button>
          <button
            className={`p-2 w-10 h-10 text-xl flex items-center justify-center rounded-full border-2 transition-all duration-200
               ${
                 bookmarked
                   ? "text-[#00b894] border-[#00b894]"
                   : "text-gray-300 border-gray-300 hover:text-[#00b894] hover:border-[#00b894]"
               }`}
            onClick={() => handleAction("bookmark")}
            aria-label={bookmarked ? "Remove bookmark" : "Bookmark"}
          >
            {bookmarked ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>
            )}
          </button>
        </div>

        <button
          className="p-2 w-10 h-10 text-xl flex items-center justify-center rounded-full border-2 text-gray-300 border-gray-300
          hover:bg-[#00b894] hover:border-transparent hover:text-white transition-all duration-300 ease-in-out"
          onClick={() => handleNavigate(`/pokemon/${pokemon?.name}`)}
          aria-label="View details"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 flex items-center justify-center">
          <img
            src={
              pokemon?.sprites?.other?.home?.front_default ||
              pokemon?.sprites?.front_default ||
              "/api/placeholder/200/200"
            }
            alt={`${pokemon?.name || "Pokemon"} sprite`}
            className="object-contain w-full max-w-[200px] h-[200px]"
            loading="lazy"
          />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-3">
          <div className="mb-1 flex gap-2 flex-wrap justify-center">
            {pokemon?.height && (
              <p className="text-xs uppercase font-semibold text-gray-500">
                {pokemon.height / 10} m
              </p>
            )}
            {pokemon?.weight && (
              <p className="text-xs uppercase font-semibold text-gray-500">
                {pokemon.weight / 10} kg
              </p>
            )}
            {pokemon?.base_experience && (
              <p className="text-xs uppercase font-semibold text-gray-500">
                {pokemon.base_experience} xp
              </p>
            )}
          </div>

          <h2 className="text-2xl text-gray-800 capitalize font-bold text-center">
            {pokemon?.name || "Unknown"}
          </h2>

          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {pokemon?.types?.map((type, index) => (
              <span
                key={index}
                className="text-xs uppercase font-semibold text-white px-5 py-1 rounded-full"
                style={{ backgroundColor: getTypeColor(type.type.name) }}
              >
                {type.type.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
