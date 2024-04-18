import useSWR from "swr";
import { ClientsTable } from "../../components/clientsTable/ClientsTable";
import { columns } from "../../components/clientsTable/columns";

export default function CLientView() {
  const fetcher = (args) => fetch(args).then((res) => res.json());

  const { data } = useSWR("/api/clients", fetcher);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 8fr 1fr",
        // background: "red",
        marginTop: "3%",
      }}
    >
      <div>hola</div>
      <div>
        <ClientsTable columns={columns} data={data} />
      </div>
      <div>hola</div>
    </div>
  );
}
