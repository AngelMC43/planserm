import { createContext, useMemo } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const saludo = "heyyou";

  const value = useMemo(
    () => ({
      saludo,
    }),
    [saludo]
  );
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
