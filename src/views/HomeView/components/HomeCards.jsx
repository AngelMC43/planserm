import CardMedia from "@mui/material/CardMedia";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CardCover from "@mui/joy/CardCover";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

import { cardData } from "./utils";
import "./home.css";
import { FONT_COLORS, FONT_FAMILY } from "../../../utils/utils";

export default function HomeCards() {
  return (
    <div
      style={{
        width: "100%",
        marginTop: "3%",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {/* {cardData.map((i) => (
        <Card
          sx={{
            "&:hover": {
              transform: "scaleX(-1)",
            },
          }}
          style={{
            width: "33.3%",
            borderRadius: "10px",
            transition: "transform 1.5s",
          }}
          key={i.title}
        >
          <CardActionArea>
            <CardMedia component="img" height="340" image={i.image} alt="gre" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {i.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {i.info}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))} */}
      {cardData.map((i) => (
        <div style={{ width: "33%" }} key={i}>
          <div
            style={{
              position: "absolute",
              width: "23%",
              height: "41.5vh",
              border: "1.5px solid #d3d3d3",
              borderRadius: "0.5vw",
              // background: `linear-gradient(to top, #1a0018 -20%, rgba(0,0,0,0) 50px)`,
              textAlign: "center",
              boxShadow: "0 3px 6px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div
              style={{
                padding: "6% 0 0 0",
                fontSize: "1.8vw",
                color: FONT_COLORS.TITLE,
                fontFamily: FONT_FAMILY.NOVA_FLAT,
              }}
            >
              {i.title}
            </div>

            <div style={{ padding: "10%", fontFamily: FONT_FAMILY.INRIA }}>
              {i.text}
            </div>
          </div>
          <Card
            sx={{
              height: "38vh",
              // width: "30.7%",
              transition: "0.5s",
              borderRadius: "0.5vw",
              "&:hover": {
                // transform: "scaleX(-1)",
                background: "red",
                opacity: 0,
              },
            }}
            class="contenedor"
            key={i.title}
          >
            <CardCover>
              <CardMedia component="img" image={i.image} />
            </CardCover>
            <CardCover
              sx={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0) 120px)",
              }}
            />
            <CardContent sx={{ justifyContent: "flex-end" }}>
              <Typography textColor="#fff" style={{ fontSize: "1.5vw" }}>
                {i.title}
              </Typography>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
