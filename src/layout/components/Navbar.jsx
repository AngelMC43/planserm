import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../images/logo-white-sin.png";
import { useLocation } from "react-router-dom";

const tabs = ["Servicios", "Presupuesto", "Contáctanos", "Sobre nosotros"];

function ResponsiveAppBar() {
  const location = useLocation();
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        alignItems: "center",
        top: 0,
        transition: "top 0.3s",
        width: "100%",
        marginLeft: "0.1%",
        color: "white",
        height: "19vh",
        background: "rgb(73 66 139)",
        borderTopLeftRadius: "10vh",
        borderBottomLeftRadius: "10vh",
        zIndex: 1000,
      }}
    >
      <img src={logo} style={{ width: "8.5%", paddingLeft: "0.6%" }} />
      <div
        style={{
          display: "row",
          justifyContent: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "10px",
            fontSize: "72px",
            height: "75%",
            paddingRight: "5%",
            fontFamily: "Nova Flat, system-ui",
            fontWeight: 500,
          }}
        >
          PLANSERM
        </span>
        <div
          style={{
            display: "flex",
            height: "25%",
            width: "90%",
            marginLeft: "3%",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            backgroundColor: "rgb(220 209 238)",
            color: "#484848",
            fontWeight: "bolder",
          }}
        >
          {tabs.map((page) => (
            <MenuItem key={page}>
              <Typography
                textAlign="center"
                style={{ fontWeight: "bolder", fontSize: "16px" }}
              >
                {page}
              </Typography>
            </MenuItem>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ResponsiveAppBar;
