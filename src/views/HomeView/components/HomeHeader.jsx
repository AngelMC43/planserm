import React from "react";
import { FONT_COLORS, FONT_FAMILY } from "../../../utils/utils";
import barrendera from "../../../images/barrendera.png";
import logo from "../../../images/logo-white-sin.png";

export default function HomeHeader() {
  return (
    <>
      <div
        style={{
          height: "20vh",
          marginTop: "-1%",
          padding: "1.8vw",
          width: "90%",
          backgroundColor: "rgb(159 124 188 / 30%)",
          borderBottomRightRadius: "14vh",
          borderTopRightRadius: "1vw",
        }}
      >
        <span
          style={{
            fontWeight: "bold",
            fontFamily: FONT_FAMILY.MADIMI,
            fontSize: "4vh",
            color: FONT_COLORS.TITLE,
          }}
        >
          ¡Bienvenido a Planserm!
        </span>
        <div
          style={{
            fontFamily: FONT_FAMILY.INRIA,
            fontSize: "2.5vh",
            lineHeight: "2",
            margin: "2vh 0 0 0",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p style={{ width: "60vw" }}>
            Con más de 20 años de experiencia, ofrecemos servicios profesionales
            que garantizan resultados impecables en cada visita. Confíe en
            Planserm para mantener sus espacios impecables y su satisfacción
            garantizada.
          </p>
          <img
            src={barrendera}
            style={{
              height: "22vh",
              marginTop: "-4%",
              opacity: "70%",
              paddingRight: "2%",
            }}
          />
          <img
            src={logo}
            style={{
              position: "absolute",
              marginTop: "-3.5%",
              left: "82vw",
              paddingTop: "1.5%",
              // top: "10vh",
              height: "9vh",
              opacity: "60%",
            }}
          />
        </div>
      </div>
    </>
  );
}
