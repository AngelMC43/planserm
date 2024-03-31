import { Link } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import { FONT_COLORS } from "../../../utils/utils";
import { contactData, networkLinks } from "./utils";
import { footerStyles, networkBox } from "./footerStyles";

export const FooterContact = () => {
  return (
    <>
      <div style={footerStyles.contactContainer}>
        {contactData.map((i) => (
          <Link to={i.link} key={i.id}>
            <Box
              sx={{
                width: i.width,
                height: i.height,
                bgcolor: "#8c88b2",
                "&:hover": {
                  bgcolor: "#9856ab",
                  boxShadow:
                    "0 4px 4px rgba(0, 0, 0, 0.1),0 8px 16px rgba(0, 0, 0, 0.1)",
                  transform: "scale(1.04)",
                },
              }}
              style={footerStyles.contactDetailBox}
            >
              <div>
                {i.content} {i.icon}
              </div>
            </Box>
          </Link>
        ))}
      </div>
      <div style={networkBox(FONT_COLORS)}>
        Síguenos en nuestras redes
        <div style={footerStyles.networkIcons}>
          {networkLinks.map((i) => (
            <Link to={i.url} target="_blank" key={i.url}>
              <IconButton color="#4f085e">{i.icon}</IconButton>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
