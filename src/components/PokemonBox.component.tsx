import { useNavigate } from "react-router-dom"
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { PATHS } from "configs";

export const PokemonBox = ({ pokemonData }: { pokemonData: any }) => {
  
  const navigate = useNavigate();

  const gotoDetails = () => {
    navigate(PATHS.POKEMON_DETAILS, {
      state: {
        pokemonData: pokemonData,
      }
    });
  }

  return (
    <div className="
      p-[10px]
      border-2 border-[#1f2937] border-solid
      w-[200px] h-[100px]
      rounded-md
      bg-slate-300 hover:bg-slate-400
      transition ease-in-out delay-150
      flex justify-between items-center	flex-col
    ">
      <p>Name: <span className="font-bold">{pokemonData.name}</span></p>
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded inline-flex items-center">
        <QuestionMarkCircleIcon className="h-6 w-6 text-white" />
        <span className="pl-[10px]" onClick={gotoDetails}>Details</span>
      </button>
    </div>
  )
}