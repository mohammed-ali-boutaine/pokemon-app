// import { typeColor } from "@/utils/colors";
// import {
//   arrowAngleRight,
//   bookmarkEmpty,
//   bookmarkFilled,
//   heartEmpty,
//   heartFilled,
// } from "@/utils/Icons";

function PokemonCard({ pokemon }) {

let liked = true;

  return (
    <div className="relative p-4 bg-white rounded-xl shadow-sm flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 bg-white rounded-tl-xl rounded-tr-xl">
          <button
            className={`p-2 w-10 h-10 text-xl flex items-center justify-center rounded-full border-2
               ${
                 liked
                   ? "text-[#fd4878] border-[#fd4878]"
                   : "text-gray-300 border-gray-300"
               }`}
          //   onClick={() => handleAction("like")}
          >
            {/* {liked ? heartFilled : heartEmpty} */}
          </button>
          <button
            className={`p-2 w-10 h-10 text-xl flex items-center justify-center rounded-full border-2

                `}
               //  ${
               //      bookmarked
               //        ? "text-[#00b894] border-[#00b894]"
               //        : "text-gray-300 border-gray-300"
               //    }
          //   onClick={() => handleAction("bookmark")}
          >
            {/* {bookmarked ? bookmarkFilled : bookmarkEmpty} */}
          </button>
        </div>

        <button
          className="p-2 w-10 h-10 text-xl flex items-center justify-center rounded-full border-2 text-gray-300 border-gray-300
          hover:bg-[#00b894] hover:border-transparent hover:text-white transition-all duration-300 ease-in-out"
          // onClick={() => handleNavigate(`/pokemon/${pokemon?.name}`)}
        >
          {/* {arrowAngleRight} */}
        </button>
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
          <img
            src={
              pokemon?.sprites?.other?.home?.front_default ||
              pokemon?.sprites?.front_default
            }
            alt="pokemon"
            className="object-contain w-[200px] h-[200px]"
          />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <div className="mb-2 flex gap-2">
            <p className="text-xs uppercase font-semibold text-gray-500">
              {pokemon?.height} m,
            </p>
            <p className="text-xs uppercase font-semibold text-gray-500">
              {pokemon?.weight} kg,
            </p>
            <p className="text-xs uppercase font-semibold text-gray-500">
              {pokemon?.base_experience} xp
            </p>
          </div>
          <h2 className="text-2xl text-gray-800 capitalize font-bold text-center">
            {pokemon?.name}
          </h2>

          <div className="flex justify-center gap-2">
            {pokemon?.types?.map((type, index) => (
              <p
                key={index}
                className="text-xs uppercase font-semibold text-white px-5 py-1 rounded-full"
               //  style={{ backgroundColor: typeColor[type?.type?.name] }}
              >
                {type.type.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
