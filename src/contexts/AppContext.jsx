import { createContext, useMemo } from "react";
import { createNewClient, useGetClients } from "../hooks/api/useGetClients";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const saludo = "heyyou";

  const { data: clientsData } = useGetClients();

  const value = useMemo(
    () => ({
      saludo,
      clientsData,
      createNewClient,
    }),
    [saludo, clientsData]
  );
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
