import { ReactTabulator } from "react-tabulator";
import { styleClientTable } from "../styleClientView";

export const ClientsTable = ({ columns, data }) => {
  const options = {
    layout: "fitColumns",
    rowHeight: 50,
    persistence: {
      headerFilter: true,
    },
    // persistence: false,
  };

  return (
    <div>
      <ReactTabulator
        resizableColumnFit={true}
        columns={columns}
        data={data}
        style={styleClientTable.tableContainer}
        options={options}
      />
    </div>
  );
};
