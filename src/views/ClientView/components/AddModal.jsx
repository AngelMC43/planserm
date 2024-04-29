import {
  Alert,
  Box,
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { FONT_COLORS, FONT_FAMILY } from "../../../utils/utils";
import { boxMUIStyle } from "../styleClientView";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

export default function AddModal({
  openModalAdd,
  setOpenModalAdd,
  newClient,
  setNewClient,
  addInputs,
  createNewClient,
  clientsData,
}) {
  const checkSimilarAdd = clientsData
    ?.map((i) => i.comunidad === newClient.comunidad)
    .includes(true);

  const handleChange = (e, name) => {
    setNewClient({
      ...newClient,
      [name]: e.target.value,
    });
  };

  const isEmptyNewClient =
    !!newClient.comunidad &&
    !!newClient.presidente &&
    !!newClient.direccion &&
    !!newClient.municipio &&
    !!newClient.telefono_contacto &&
    !!newClient.domicilio_presidente &&
    !!newClient.servicios;

  const handleAdd = async () => {
    createNewClient(newClient),
      setOpenModalAdd(false),
      setNewClient({
        comunidad: "",
        presidente: "",
        direccion: "",
        municipio: "",
        servicios: [],
        telefono_contacto: 0,
        domicilio_presidente: "",
      });
  };

  const ServicesOptions = ["Jardineria", "Garaje", "Piscina"];

  return (
    <Modal
      open={openModalAdd}
      onClose={() => setOpenModalAdd(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={boxMUIStyle}>
        <Typography
          id="modal-modal-title"
          variant="h5"
          component="h2"
          style={{ fontFamily: FONT_FAMILY.MADIMI }}
        >
          Añade una nueva comunidad
        </Typography>
        {checkSimilarAdd && (
          <Alert
            sx={{ m: 2, transition: "transform 1.5s" }}
            icon={<WarningAmberIcon fontSize="inherit" />}
            severity="warning"
          >
            La comunidad introducida ya existe en la base de datos.
          </Alert>
        )}

        <div
          style={{
            marginTop: "4%",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            paddingLeft: "5%",
          }}
        >
          {addInputs.map((i, index) => (
            <div style={{ width: "100%" }}>
              {i.type === "text" ? (
                <TextField
                  key={index}
                  label={i.title}
                  variant="standard"
                  onChange={(e) => handleChange(e, i.name)}
                  sx={{ width: "80%" }}
                />
              ) : (
                <FormControl variant="standard" sx={{ width: "80%" }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Servicios
                  </InputLabel>
                  <Select
                    // multiple
                    value={newClient?.servicios}
                    onChange={(e) => handleChange(e, i.name)}
                    // renderValue={(selected) => (
                    //   <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    //     {selected.map((value) => (
                    //       <Chip key={value} label={value} />
                    //     ))}
                    //   </Box>
                    // )}
                  >
                    {ServicesOptions.map((i) => (
                      <MenuItem key={i} value={i}>
                        {i}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "6%",
            borderTop: `1px solid ${FONT_COLORS.LIGTH_GREY}`,
            marginLeft: "2%",
            marginTop: "7%",
            width: "96%",
          }}
        >
          <Button
            onClick={handleAdd}
            disabled={!isEmptyNewClient | checkSimilarAdd}
            variant="contained"
            color="secondary"
            style={{ marginTop: "3%" }}
          >
            Añadir
          </Button>
        </div>
      </Box>
    </Modal>
  );
}
