import useSWR from "swr";
import { fetcher } from "../../api/utils/utils";
import { appRoutes } from "../../utils/utils";

export function useGetClients() {
  const { data } = useSWR(`/api/${appRoutes.CLIENTS}`, fetcher);

  return { data };
}

export function createNewClient() {}
