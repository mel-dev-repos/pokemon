import { usePokemonStore } from "ZustandSM/store";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export const usePokemonStore1 = create(devtools(
  persist(usePokemonStore, {
    name: "pokemonsList"
  })
));