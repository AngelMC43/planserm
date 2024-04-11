import useSWR from "swr";

export default function CLientView() {
  const fetcher = (args) => fetch(args).then((res) => res.json());

  const { data } = useSWR("/api/users", fetcher);

  return <div>{data?.map((i) => i.name)}</div>;
}
