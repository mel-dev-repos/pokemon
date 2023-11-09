export const pokemonStore = ((set: any) => ({
  pokemons: [],
  pokemonDetails: Object,
  setPokemons: (pokemons: any[]) => set(() => ({ pokemons: pokemons })),
  setPokemonDetails: (pokemonDetails: any) => set(() => ({ pokemonDetails: pokemonDetails })),
  fetchData: async (apiFunction: any) => {
    try {
      return await apiFunction();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
}));