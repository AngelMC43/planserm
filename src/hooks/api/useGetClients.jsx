import useSWR from "swr";
import { fetcher } from "../../api/utils/utils";
import { appRoutes } from "../../utils/utils";
import axios from "axios";

export function useGetClients() {
  const { data } = useSWR(`/api/${appRoutes.CLIENTS}`, fetcher);

  return { data };
}

export async function createNewClient(body) {
  try {
    await axios.post("/api/clients", body);
  } catch (error) {
    console.error("Error al enviar la solicitud POST:", error);
  }
}
