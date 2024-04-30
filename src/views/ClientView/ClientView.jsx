import { useState } from "react";
import { ClientsTable } from "./components/ClientsTable";
import { columns } from "./components/columns";
import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { styleClientView } from "./styleClientView";
import AddModal from "./components/AddModal";
import { addInputs, initialClientTemplate } from "./utils";
import useAppContext from "../../hooks/contexts/useAppContext";

export default function CLientView() {
  const { clientsData, createNewClient } = useAppContext();

  const [openModalAdd, setOpenModalAdd] = useState(false);

  const [newClient, setNewClient] = useState({
    comunidad: "",
    presidente: "",
    direccion: "",
    municipio: "",
    servicios: [],
    telefono_contacto: 0,
    domicilio_presidente: "",
  });

  return (
    <>
      <div style={styleClientView.mainContainer}>
        <div style={styleClientView.borderContainer}>
          <div style={styleClientView.marginContainer}>
            <div style={styleClientView.headerContainer}>
              <span style={styleClientView.title}>Comunidades</span>
              <span style={styleClientView.addIcon}>
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
            <ClientsTable columns={columns} clientsData={clientsData} />
          </div>
        </div>
        <AddModal
          openModalAdd={openModalAdd}
          setOpenModalAdd={setOpenModalAdd}
          setNewClient={setNewClient}
          addInputs={addInputs}
          newClient={newClient}
          createNewClient={() => createNewClient(newClient)}
          clientsData={clientsData}
        />
      </div>
    </>
  );
}
