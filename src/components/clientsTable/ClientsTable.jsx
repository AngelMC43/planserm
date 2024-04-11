import { ReactTabulator } from "react-tabulator";

export const ClientsTable = ({ columns, data }) => {
  return (
    <div>
      <ReactTabulator columns={columns} data={data} />
    </div>
  );
};
