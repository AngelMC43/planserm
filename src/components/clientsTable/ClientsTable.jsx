import { ReactTabulator } from "react-tabulator";
import { styleClienTable } from "./styleClienTable";

export const ClientsTable = ({ columns, data }) => {
  return (
    <div>
      <ReactTabulator
        resizableColumnFit={true}
        columns={columns}
        data={data}
        layout="fitColumns"
        style={styleClienTable.tableContainer}
      />
    </div>
  );
};
