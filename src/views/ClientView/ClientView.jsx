import { useState } from "react";
import { ClientsTable } from "./components/ClientsTable";
import { columns } from "./components/columns";
import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { FONT_FAMILY } from "../../utils/utils";
import { useGetClients } from "../../hooks/api/useGetClients";
import { styleClientView } from "./styleClientView";
import AddModal from "./components/AddModal";
import { addInputs, initialClientTemplate } from "./utils";
import { createNewClient } from "../../hooks/api/useGetClients";

export default function CLientView() {
  const { data: clientsData, responseData } = useGetClients();

  const [openModalAdd, setOpenModalAdd] = useState(false);

  const [newClient, setNewClient] = useState({});
  console.log("🚀 ~ CLientView ~ newClient:", newClient);

  return (
    <div style={styleClientView.mainContainer}>
      <div style={styleClientView.borderContainer}>
        <div style={styleClientView.marginContainer}>
          <div style={styleClientView.headerContainer}>
            <span style={styleClientView.title(FONT_FAMILY)}>Comunidades</span>
            <span style={styleClientView.addIcon(FONT_FAMILY)}>
              Añadir
              <IconButton
                color="secondary"
                onClick={() => setOpenModalAdd(true)}
              >
                <AddCircleIcon fontSize="large" />
              </IconButton>
            </span>
          </div>
        </div>
        <div style={styleClientView.tableContainer}>
          <div style={styleClientView.tableSize}>
            <ClientsTable columns={columns} data={clientsData} />
          </div>
        </div>
      </div>
      <AddModal
        openModalAdd={openModalAdd}
        setOpenModalAdd={setOpenModalAdd}
        setNewClient={setNewClient}
        addInputs={addInputs}
        newClient={newClient}
        createNewClient={() => createNewClient(newClient)}
      />
    </div>
  );
}
