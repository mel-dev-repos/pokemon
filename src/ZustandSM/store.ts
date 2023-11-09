import { create } from 'zustand';
import { pokemonStoreType } from './types';

export const usePokemonStore = create<pokemonStoreType>()((set: any) => ({
  pokemons: [],
  pokemonDetails: {},
  setPokemons: () => set((state: any[]) => ({ pokemons: state })),
  setPokemonDetails: () => set((state: {}) => ({ pokemonDetails: state })),
  fetchData: async (API: any) => {
    const res = await API;
    await set({ res });
  },
}));