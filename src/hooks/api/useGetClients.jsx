import useSWR, { mutate } from "swr";
import { fetcher } from "../../api/utils/utils";
import axios from "axios";
import { appRoutes } from "../../router/utils";

export function useGetClients() {
  const { data } = useSWR(`/api/${appRoutes.CLIENTS}`, fetcher);

  return { data };
}

export async function createNewClient(body) {
  try {
    await axios.post(`/api/${appRoutes.CLIENTS}`, body);
    mutate(`/api/${appRoutes.CLIENTS}`);
  } catch (error) {
    console.error(error);
  }
}
