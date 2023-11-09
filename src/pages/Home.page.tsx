import { GetAllPokemonsAPI } from "apis";
import { PokemonBox, PokemonLoading } from "components";
import { usePokemonStore } from "hooks";
import { MainLayout } from "layouts";
import { useEffect, useState } from "react";

export const HomePage = () => {

  const [loading, setLoading] = useState<boolean>(false);
  const { fetchData: zustandFetcher, pokemons: pokemonsList, setPokemons } = usePokemonStore((state) => state);
  
  const getData = () => {
    setLoading(true);
    zustandFetcher(GetAllPokemonsAPI).then((response: any) => {
      setPokemons(response.results);
      setLoading(false);
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
          loading ? <PokemonLoading/> : pokemonsList.map((pokemonItem: any, index: number) => (
            <PokemonBox pokemonData={{...pokemonItem, index}} key={pokemonItem.name}/>
          ))
        }
      </div>
    </MainLayout>
  )
}