import { ReactTabulator } from "react-tabulator";
import { styleClientTable } from "../styleClientView";

export const ClientsTable = ({ columns, clientsData }) => {
  const options = {
    layout: "fitColumns",
    rowHeight: 50,
  };

  return (
    <ReactTabulator
      resizableColumnFit={true}
      columns={columns}
      data={clientsData}
      style={styleClientTable.tableContainer}
      options={options}
    />
  );
};
