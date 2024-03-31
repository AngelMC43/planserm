import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import logo from "../../images/logo-white-sin.png";
import { FONT_COLORS } from "../../utils/utils";
const pages = ["Servicios", "Presupuesto", "Contáctanos", "Sobre nosotros"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
            width: "94%",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            backgroundColor: "rgb(220 209 238)",
            color: "#484848",
            fontWeight: "bolder",
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
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
      <div
        style={{
          width: "1.2%",
          height: "100%",
          background: FONT_COLORS.YELLOW,
        }}
      ></div>
    </div>
  );
}
export default ResponsiveAppBar;
