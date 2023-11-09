import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PublicRtoutes } from "./public.routes";
import { PATHS } from "configs";
import { HomePage, PokemonDetailsPage } from "pages";
import { NotFoundPage } from "pages/NotFound.page";

export default function AppRouting() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.HOME} element={<PublicRtoutes />}>
          <Route index element={<HomePage/>} />
          <Route path={PATHS.POKEMON_DETAILS} element={<PokemonDetailsPage/>} />
          <Route path={PATHS.NOT_FOUND} element={<NotFoundPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}