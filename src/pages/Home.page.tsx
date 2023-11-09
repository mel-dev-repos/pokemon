import { GetAllPokemonsAPI } from "apis";
import { PokemonBox } from "components";
import { usePokemonStore } from "hooks";
import { MainLayout } from "layouts";
import { useEffect } from "react";

export const HomePage = () => {

  const { fetchData: zustandFetcher, pokemons: pokemonsList, setPokemons } = usePokemonStore((state) => state);
  
  const getData = () => {
    zustandFetcher(GetAllPokemonsAPI).then((response: any) => {
      setPokemons(response.results);
    });
  }

  useEffect(() => {
    if(pokemonsList.length === 0) {
      getData();
    }
  }, [])

  return (
    <MainLayout>
      <div className="flex flex-wrap items-center justify-between gap-[10px]">
        {
          pokemonsList.map((pokemonItem: any, index: number) => (
            <PokemonBox pokemonData={{...pokemonItem, index}} key={pokemonItem.name}/>
          ))
        }
      </div>
    </MainLayout>
  )
}