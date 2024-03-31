import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatshotIcon from "@mui/icons-material/Whatshot";

import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export const networkLinks = [
  {
    icon: <FacebookIcon sx={{ fontSize: 60, color: "#75587c" }} />,
    url: "https://www.facebook.com/p/Antonio-Ben-AC-100010390519256",
  },
  {
    icon: <InstagramIcon sx={{ fontSize: 60, color: "#75587c" }} />,
    url: "https://www.instagram.com/",
  },
  {
    icon: <WhatshotIcon sx={{ fontSize: 60, color: "#75587c" }} />,
    url: "https://www.instagram.com/",
  },
];

export const contactData = [
  {
    id: 1,
    width: 300,
    // height: 25,
    content: "Contáctanos",
  },
  {
    id: 2,
    width: 300,
    height: 23,
    content: <MailIcon color="#4f085e" />,
    link: "mailto:planificacionsm@hotmail.com",
  },
  {
    id: 3,
    width: 300,
    // height: 25,
    content: "planificacionsm@hotmail.com",
    link: "mailto:planificacionsm@hotmail.com",
  },
  {
    id: 4,
    width: 300,
    height: 23,
    content: <LocalPhoneIcon color="#4f085e" />,
    link: "tel:952610137",
  },
  {
    id: 5,
    width: 300,
    // height: 25,
    content: "952 610 137 / 665 565 943",
    link: "tel:952610137",
  },
];
