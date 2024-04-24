import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { FONT_FAMILY } from "../../../utils/utils";
import { boxMUIStyle } from "../styleClientView";

export default function AddModal({
  openModalAdd,
  setOpenModalAdd,
  setNewClient,
  addInputs,
  newClient,
  createNewClient,
}) {
  const handleChange = (e, name) => {
    setNewClient({
      ...newClient,
      [name]: e.target.value,
    });
  };

  const handleAdd = async () => {
    createNewClient(newClient), setOpenModalAdd(false);
  };

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
        {addInputs.map((i, index) => (
          <div key={index}>
            {i.type === "text" ? (
              <TextField
                key={index}
                label={i.title}
                variant="standard"
                onChange={(e) => handleChange(e, i.name)}
              />
            ) : (
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Servicios
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={"age"}
                  onChange={(e) => handleChange(e, i.name)}
                  label="Age"
                >
                  <MenuItem value={"Jardineria"}>Jardineria</MenuItem>
                  <MenuItem value={"Garaje"}>Garaje</MenuItem>
                  <MenuItem value={"Piscina"}>Piscina</MenuItem>
                </Select>
              </FormControl>
            )}
          </div>
        ))}

        <div>
          <Button onClick={handleAdd} variant="outlined">
            Añadir
          </Button>
        </div>
      </Box>
    </Modal>
  );
}
