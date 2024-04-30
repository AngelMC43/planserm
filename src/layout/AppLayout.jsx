import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/SideBar";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { IconButton, Tooltip } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import rock from "../images/rock.png";
import rock2 from "../images/rock2.png";
import { appRoutes } from "../router/utils";
import { NavbarAdmin } from "./components/NavbarAdmin";

export const AppLayout = ({ children }) => {
  const location = useLocation();

  return (
    <>
      {location.pathname === appRoutes.HOME ? (
        <>
          <div style={{ height: "16vh" }}>
            <Navbar />
          </div>
          <img
            src={rock}
            style={{
              width: "25%",
              position: "fixed",
              paddingTop: "9%",
              opacity: "0.25",
              zIndex: "-1000",
            }}
          />
          <div>
            <img
              src={rock2}
              style={{
                position: "fixed",
                width: "25%",
                paddingTop: "10vh",
                opacity: "0.3",
                zIndex: "-1000",
                paddingLeft: "75%",
              }}
            />
          </div>
          <div>
            <Link to="https://web.whatsapp.com/" target="_blank">
              <Tooltip title="Contáctanos por Whatsapp">
                <IconButton
                  style={{
                    position: "fixed",
                    marginTop: "35%",
                    marginLeft: "94%",
                    color: "#34ce34",
                    zIndex: 1000,
                  }}
                >
                  <WhatsAppIcon sx={{ fontSize: 70 }} />
                </IconButton>
              </Tooltip>
            </Link>
          </div>
        </>
      ) : (
        <>
          <NavbarAdmin />
          <Sidebar />
        </>
      )}

      {children}
      {location.pathname === appRoutes.HOME && <Footer />}
    </>
  );
};
