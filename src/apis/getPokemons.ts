import { GET_ALL_POKEMONS_EP } from "configs";
import httpService from "services/http.service";

export const GetAllPokemonsAPI = async () => {
  const response = await httpService.get(GET_ALL_POKEMONS_EP);
  return response.data;
}