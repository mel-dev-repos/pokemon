import { GetPokemonDetailsAPI } from "apis/getPokemonDetails";
import { PokemonLoading } from "components";
import { PATHS } from "configs";
import { usePokemonStore } from "hooks";
import { MainLayout } from "layouts"
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { checkPokemonDetailsIsEmpty } from "utils";

export const PokemonDetailsPage = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const pokemonId: number = location?.state?.pokemonData?.url?.split('/')[6];
  const pokemonName: string = location?.state?.pokemonData?.name;
  
  const [loading, setLoading] = useState<boolean>(false);
  const { fetchData: zustandFetcher, pokemonDetails, setPokemonDetails } = usePokemonStore((state) => state);

  const resetPokemonDetails = () => {
    setPokemonDetails({});
    navigate(PATHS.HOME);
  }
  const getData = () => {
    setLoading(true);
    zustandFetcher(() => GetPokemonDetailsAPI(pokemonId)).then((response: any) => {
      setPokemonDetails(response);
      setLoading(false);
    });
  }

  useEffect(() => {
    if((pokemonId && checkPokemonDetailsIsEmpty(pokemonDetails ?? {})) || (!checkPokemonDetailsIsEmpty(pokemonDetails ?? {}) &&  pokemonDetails.name !== pokemonName && pokemonId)) {
      getData();
    }
  }, [pokemonId])

  const NotSelectedPokemon = () => {
    return (
      <div className="h-[60vh] w-auto flex flex-col justify-center items-center bg-white m-[-15px]">
        <h1 className="text-[25px] font-extrabold text-[#1f2937] tracking-widest">Not Selected Pokemon !</h1>
        <button className="mt-5">
            <a className="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring">
              <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#1f2937] group-hover:translate-y-0 group-hover:translate-x-0"></span>
              <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                <Link to={PATHS.HOME}>Goto Home And Select Pokemon</Link>
              </span>
            </a>
          </button>
      </div>
    )
  }

  const renderSprites = (sprites: any): any => {
    return Object.keys(sprites).map((key: any) => {
      const sprite = sprites[key];
      if (typeof sprite === 'object' && sprite !== null) {
        return renderSprites(sprite);
      } else if(sprite !== null) {
        return (
          <div key={key}>
            <img src={sprite} alt={key} className="w-[50px] h-[50px] border-2 border-[#1f2937] border-solid"/>
          </div>
        );
      }
    });
  };

  const SelectedPokemon = ({ pokemon }: { pokemon: any }) => {
    return (
      <div className="container mx-auto py-8 px-[50px]">
        <h1 className="text-3xl font-bold mb-4">
          Pokemon Details ({pokemon.name})
          <button className="bg-[#1f2937] hover:bg-red text-white font-bold py-2 px-4 rounded inline-flex items-center text-[16px] h-[30px] ml-[10px]" onClick={resetPokemonDetails}>Reset</button>
        </h1>
        <hr className="border-[#1f2937] my-[15px]"/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <h2 className="text-xl font-bold mb-2">Abilities</h2>
            <ul className="list-disc pl-4">
              {pokemon.abilities.map((ability: any, index: number) => (
                <li key={index}>{ability.ability.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Base Experience</h2>
            <p>{pokemon.base_experience}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Forms</h2>
            <ul className="list-disc pl-4">
              {pokemon.forms.map((form: any, index: number) => (
                <li key={index}>{form.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Stats</h2>
            <ul className="list-disc pl-4">
              {pokemon.stats.map((stats: any, index: number) => (
                <li key={index}>base_stat: {stats.base_stat}</li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="border-[#1f2937] my-[15px]"/>
        <div>
          <h2 className="text-xl font-bold mb-2">Game indices</h2>
          <ul className="list-disc flex flex-wrap gap-[5px]">
            {pokemon.game_indices.map((game: any, index: number) => (
              <li key={index} className="list-none px-[5px] py-[2.5px] border-2 border-[#1f2937] border-solid w-[100px] block whitespace-nowrap	overflow-hidden	text-ellipsis transition hover:bg-[#1f2937] hover:text-white cursor-pointer" onClick={() => alert(game.version.url)}>{game.version.name}</li>
            ))}
          </ul>
        </div>
        <hr className="border-[#1f2937] my-[15px]"/>
        <div>
          <h2 className="text-xl font-bold mb-2">Moves</h2>
          <ul className="list-disc flex flex-wrap gap-[5px]">
            {pokemon.moves.map((move: any, index: number) => (
              <li key={index} className="list-none px-[5px] py-[2.5px] border-2 border-[#1f2937] border-solid w-[100px] block whitespace-nowrap	overflow-hidden	text-ellipsis transition hover:bg-[#1f2937] hover:text-white cursor-pointer" onClick={() => alert(move.move.url)}>{move.move.name}</li>
            ))}
          </ul>
        </div>
        <hr className="border-[#1f2937] my-[15px]"/>
        <div>
          <h2 className="text-xl font-bold mb-2">Sprites</h2>
          <ul className="list-disc flex flex-wrap gap-[5px]">
            {renderSprites(pokemon.sprites)}
          </ul>
        </div>
      </div>
    )
  }

  return (
    <MainLayout>
      <main>
        { loading ? <PokemonLoading/> : checkPokemonDetailsIsEmpty(pokemonDetails) ? <NotSelectedPokemon/> : <SelectedPokemon pokemon={pokemonDetails}/> }
      </main>
    </MainLayout>
  )
}