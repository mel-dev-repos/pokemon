export const checkPokemonDetailsIsEmpty = (pokemonObj: any) => {
  return Object.keys(pokemonObj).length === 0;
}
