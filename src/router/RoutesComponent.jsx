import { Routes, Route } from "react-router-dom";
import { appRoutes } from "../utils/utils";
import HomeView from "../views/HomeView/HomeView";
import CLientView from "../views/ClientView/ClientView";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path={appRoutes.HOME} element={<HomeView />} />
      <Route path={"clients"} element={<CLientView />} />
    </Routes>
  );
}
