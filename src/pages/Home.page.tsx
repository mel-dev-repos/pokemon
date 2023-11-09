import { GetAllPokemonsAPI } from "apis";
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
      <div>
        {
          pokemonsList.map((pokemonItem: any) => (
            <p>{pokemonItem.name}</p>
          ))
        }
      </div>
    </MainLayout>
  )
}