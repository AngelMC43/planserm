import useSWR from "swr";
import { fetcher } from "../../api/utils/utils";

export function useGetClients() {
  const { data } = useSWR("/api/clients", fetcher);

  return { data };
}
