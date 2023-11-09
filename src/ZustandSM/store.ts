export const pokemonStore = ((set: any) => ({
  pokemons: [],
  pokemonDetails: {},
  setPokemons: (pokemons: any[]) => set(() => ({ pokemons: pokemons })),
  setPokemonDetails: () => set((state: {}) => ({ pokemonDetails: state })),
  fetchData: async (apiFunction: any) => {
    try {
      return await apiFunction();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
}));