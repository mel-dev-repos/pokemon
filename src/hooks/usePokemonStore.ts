import { pokemonStore } from "ZustandSM/store";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export const usePokemonStore = create(devtools(
  persist(pokemonStore, {
    name: "pokemonsList"
  })
));