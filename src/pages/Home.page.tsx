import { usePokemonStore } from "ZustandSM/store";

export const HomePage = () => {

  const test = usePokemonStore((state) => state.pokemons);
  console.log(test);

  return (
    <p>Home</p>
  )
}