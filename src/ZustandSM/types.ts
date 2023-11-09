export type pokemonStoreType = {
  pokemons: any[],
  pokemonDetails: {},
  setPokemons: () => void,
  setPokemonDetails: () => void,
  fetchData: (api: any) => void,
}