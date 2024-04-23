import { useState } from "react";
import { ClientsTable } from "../../components/clientsTable/ClientsTable";
import { columns } from "../../components/clientsTable/columns";
import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { FONT_FAMILY } from "../../utils/utils";
import { useGetClients } from "../../hooks/api/useGetClients";
import { styleClientView } from "./styleClientView";
import AddModal from "./components/AddModal";

const initialClientTemplate = {
  Comunidad: "",
  Presidente: "",
  Direccion: "",
  Municipio: "",
  Servicios: "",
  TelefonoContacto: "",
  DomicilioPresidente: "",
};

const addInputs = [
  { name: "Comunidad", type: "text" },
  { name: "Presidente", type: "text" },
  { name: "Dirección", type: "text" },
  { name: "Municipio", type: "text" },
  { name: "Teléfono de contacto", type: "text" },
  { name: "Domicilio presidente", type: "text" },
  { name: "Servicios", type: "select" },
];

export default function CLientView() {
  const { data } = useGetClients();

  const [openModalAdd, setOpenModalAdd] = useState(false);

  const [newClient, setNewClient] = useState(initialClientTemplate);

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
                onClick={() => {
                  setOpenModalAdd(true);
                }}
              >
                <AddCircleIcon fontSize="large" />
              </IconButton>
            </span>
          </div>
        </div>
        <div style={styleClientView.tableContainer}>
          <div style={styleClientView.tableSize}>
            <ClientsTable columns={columns} data={data} />
          </div>
        </div>
      </div>
      <AddModal
        openModalAdd={openModalAdd}
        setOpenModalAdd={setOpenModalAdd}
        setNewClient={setNewClient}
        addInputs={addInputs}
      />
    </div>
  );
}
