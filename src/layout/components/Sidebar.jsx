import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import { FONT_COLORS } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../router/utils";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "#eadfe9",
        maxWidth: "4%",
        border: "1px solid #b7b7b7",
        height: "75vh",
        position: "absolute",
        marginTop: "8vh",
        borderTopRightRadius: "6vh",
        borderBottomRightRadius: "6vh",
        boxShadow: "4px 4px 4px  rgba(0, 0, 0, 0.2)",
      }}
    >
      <IconButton
        onClick={() => navigate(appRoutes.HOME)}
        style={{ margin: "4vh 0 0 1vh", color: FONT_COLORS.ICONS }}
      >
        <HomeIcon fontSize="large" />
      </IconButton>
      <IconButton
        onClick={() => navigate(appRoutes.CLIENTS)}
        style={{ margin: "2vh 0 0 1vh", color: FONT_COLORS.ICONS }}
        active={true}
        disabled={true}
      >
        <BusinessRoundedIcon fontSize="large" />
      </IconButton>
      <IconButton
        onClick={() => navigate(appRoutes.CONFIGURATION)}
        style={{ margin: "2vh 0 0 1vh", color: FONT_COLORS.ICONS }}
      >
        <SettingsIcon fontSize="large" />
      </IconButton>
    </div>
  );
}
