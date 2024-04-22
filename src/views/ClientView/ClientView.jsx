import useSWR from "swr";
import { ClientsTable } from "../../components/clientsTable/ClientsTable";
import { columns } from "../../components/clientsTable/columns";
import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { FONT_FAMILY } from "../../utils/utils";
import { useState } from "react";

const initialClientTemplate = {
  Comunidad: "",
  Presidente: "",
  Direccion: "",
  Municipio: "",
  Presidente: "",
  Servicios: "",
  TelefonoContacto: "",
  DomicilioPresidente: "",
};
export default function CLientView() {
  const [openModalAdd, setOpenModalAdd] = useState(false);

  const [newClient, setNewClient] = useState(initialClientTemplate);
  console.log("🚀 ~ CLientView ~ newClient:", newClient);

  const fetcher = (args) => fetch(args).then((res) => res.json());

  const { data } = useSWR("/api/clients", fetcher);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    borderRadius: "5vh",
    boxShadow: 24,
    p: 4,
  };

  const addInput = [
    { name: "Comunidad", type: "text" },
    { name: "Presidente", type: "text" },
    { name: "Dirección", type: "text" },
    { name: "Municipio", type: "text" },
    { name: "Teléfono de contacto", type: "text" },
    { name: "Domicilio presidente", type: "text" },
    { name: "Servicios", type: "select" },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "81vh",
      }}
    >
      <div
        style={{
          border: "2px solid #a7a7a7",
          borderRadius: "6vh",
          width: "75%",
          marginTop: "3%",
        }}
      >
        <div
          style={{
            margin: "3% 0 0 5%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "95%",
            }}
          >
            <span style={{ fontSize: "2vw", fontFamily: FONT_FAMILY.MADIMI }}>
              Comunidades
            </span>
            <span style={{ fontSize: "1.5vw", fontFamily: FONT_FAMILY.MADIMI }}>
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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: "95%",
              marginTop: "2%",
            }}
          >
            <ClientsTable columns={columns} data={data} />
          </div>
        </div>
      </div>
      <Modal
        open={openModalAdd}
        onClose={() => setOpenModalAdd(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            style={{ fontFamily: FONT_FAMILY.MADIMI }}
          >
            Añade una nueva comunidad
          </Typography>
          {addInput.map((i) => (
            <>
              {i.type === "text" ? (
                <TextField
                  label={i.name}
                  variant="standard"
                  onChange={(e) => setNewClient(e.target.value)}
                />
              ) : (
                <>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Servicios
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={"age"}
                      onChange={() => {}}
                      label="Age"
                    >
                      <MenuItem value={10}>Jardineria</MenuItem>
                      <MenuItem value={20}>Garaje</MenuItem>
                      <MenuItem value={30}>Piscina</MenuItem>
                    </Select>
                  </FormControl>
                </>
              )}
            </>
          ))}

          <div>
            <Button onClick={() => setOpenModalAdd(false)} variant="outlined">
              Añadir
            </Button>
          </div>
        </Box>
      </Modal>
      ;
    </div>
  );
}
