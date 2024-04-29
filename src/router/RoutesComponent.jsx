import { Routes, Route } from "react-router-dom";

import HomeView from "../views/HomeView/HomeView";
import CLientView from "../views/ClientView/ClientView";
import ConfigurationView from "../views/ConfigurationView/ConfigurationView";

import { appRoutes } from "./utils";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path={appRoutes.HOME} element={<HomeView />} />
      <Route path={appRoutes.CLIENTS} element={<CLientView />} />
      <Route path={appRoutes.CONFIGURATION} element={<ConfigurationView />} />
    </Routes>
  );
}
