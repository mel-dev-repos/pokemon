import { GET_POKEMON_DETAILS_EP } from "configs";
import httpService from "services/http.service";

export const GetPokemonDetailsAPI = async (pokemonId: number) => {
  const response = await httpService.get(GET_POKEMON_DETAILS_EP + pokemonId);
  return response.data;
}