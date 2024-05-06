import { IconButton, Typography } from "@mui/material";
import logo from "../../images/purple-sin-solo.png";
import { FONT_COLORS, FONT_FAMILY } from "../../utils/utils";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";

export const NavbarAdmin = () => {
  const user = "Angel Muñoz Caballero";

  return (
    <div
      style={{
        height: "10vh",
        border: "1px solid #b7b7b7",
        background: "#eadfe9",
        boxShadow: "4px 4px 4px  rgba(0, 0, 0, 0.2)",
        borderRadius: "6vh 0 4vh 6vh",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <img
        src={logo}
        style={{ width: "5%", height: "90%", padding: "0.2% 0 0 0.4%" }}
      />
      <span
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "60px",
          paddingLeft: "25%",
          fontFamily: "Nova Flat, system-ui",
          fontWeight: 500,
          color: FONT_COLORS.TITLE,
        }}
      >
        PLANSERM
      </span>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          width: "60vh",
        }}
      >
        <Typography
          id="modal-modal-title"
          variant="h7"
          style={{
            color: FONT_COLORS.TITLE,
            fontFamily: FONT_FAMILY.MADIMI,
            paddingRight: "1%",
            display: "flex",
            alignItems: "center",
          }}
        >
          {user}
        </Typography>
        <IconButton
          onClick={() => console.log("hola")}
          //   style={{ margin: "4vh 0 0 1vh" }}
        >
          <ExitToAppRoundedIcon fontSize="medium" />
        </IconButton>
      </div>
    </div>
  );
};
