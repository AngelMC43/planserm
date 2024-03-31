import { Routes, Route } from "react-router-dom";
import { appRoutes } from "../utils/utils";
import HomeView from "../views/HomeView/HomeView";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path={appRoutes.HOME} element={<HomeView />} />
    </Routes>
  );
}
