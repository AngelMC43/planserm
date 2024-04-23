import { ReactTabulator } from "react-tabulator";
import { styleClienTable } from "./styleClientTable";

export const ClientsTable = ({ columns, data }) => {
  const options = {
    layout: "fitColumns",
    rowHeight: 50,
    // persistence: false,
  };
  return (
    <div>
      <ReactTabulator
        resizableColumnFit={true}
        columns={columns}
        data={data}
        style={styleClienTable.tableContainer}
        options={options}
      />
    </div>
  );
};
