import { CubeIcon } from "@heroicons/react/24/outline";
import { PATHS } from "configs";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const Navigate = useNavigate();

  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <CubeIcon className="h-6 w-6 text-gray-500" />
        <h1 className="text-xl font-bold pl-[15px]">Pokemon Site</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li className="hover:text-gray-300 cursor-pointer" onClick={() => Navigate(PATHS.POKEMON_DETAILS)}>Last Item</li>
          <li className="hover:text-gray-300 cursor-pointer" onClick={() => Navigate(PATHS.ABOUT_US)}>About Us</li>
          <li className="hover:text-gray-300 cursor-pointer" onClick={() => Navigate(PATHS.HOME)}>Home</li>
        </ul>
      </nav>
    </header>
  );
};