import { CubeIcon } from "@heroicons/react/24/outline";
import { PATHS } from "configs";
import { usePokemonStore } from "hooks";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkPokemonDetailsIsEmpty } from "utils";

export const Header = () => {
  const navigate = useNavigate();
  const { pokemonDetails } = usePokemonStore((state) => state);
  const [lastPokemon, setLastPokemon] = useState<string>("");

  useEffect(() => {
    if(checkPokemonDetailsIsEmpty(pokemonDetails)) {
      setLastPokemon("");
    } else {
      setLastPokemon(pokemonDetails.name);
    }
  })

  return (
    <header className="flex flex-col sm:flex-row items-center justify-between p-4 bg-gray-800 text-white min-h-[10vh]">
      <div className="flex items-center">
        <CubeIcon className="h-6 w-6 text-gray-500" />
        <h1 className="text-xl font-bold pl-2 sm:pl-4">Pokemon Site</h1>
      </div>
      <nav className="mt-4 sm:mt-0">
        <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-center">
          <li className="hover:text-gray-300 cursor-pointer" onClick={() => navigate(PATHS.POKEMON_DETAILS)}>
            Last Item {lastPokemon !== "" ? `(${lastPokemon})` : ""}
          </li>
          <li className="hover:text-gray-300 cursor-pointer" onClick={() => navigate(PATHS.ABOUT_US)}>
            About Us
          </li>
          <li className="hover:text-gray-300 cursor-pointer" onClick={() => navigate(PATHS.HOME)}>
            Home
          </li>
        </ul>
      </nav>
    </header>
  );
};