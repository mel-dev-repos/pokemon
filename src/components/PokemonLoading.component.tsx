import "assets/styles/components/PokemonLoading.style.css";
const PokemonLogo = require("assets/images/pokemon-logo.png");

export const PokemonLoading = () => {
  return (
    <div className="flex items-center justify-center h-[60vh] m-[-15px] text-center">
      <img
        className="w-20 h-20 animate-spin"
        src={PokemonLogo}
        alt=""
        width="120"
        height="120"
      />
    </div>
  )
}
