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
}) {
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
        {addInputs.map((i) => (
          <div key={i.name}>
            {i.type === "text" ? (
              <TextField
                key={i.name}
                label={i.name}
                variant="standard"
                onChange={(e) => setNewClient(e.target.value)}
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
                  onChange={() => {}}
                  label="Age"
                >
                  <MenuItem value={10}>Jardineria</MenuItem>
                  <MenuItem value={20}>Garaje</MenuItem>
                  <MenuItem value={30}>Piscina</MenuItem>
                </Select>
              </FormControl>
            )}
          </div>
        ))}

        <div>
          <Button onClick={() => setOpenModalAdd(false)} variant="outlined">
            Añadir
          </Button>
        </div>
      </Box>
    </Modal>
  );
}
