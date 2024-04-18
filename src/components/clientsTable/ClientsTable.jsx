import { ReactTabulator } from "react-tabulator";

export const ClientsTable = ({ columns, data }) => {
  return (
    <div>
      <div id="example-table"></div>
      <ReactTabulator
        resizableColumnFit={true}
        columns={columns}
        data={data}
        layout="fitColumns"
      />
    </div>
  );
};
