import React from "react";
import { Link } from "react-router-dom";
import { map, iconMap } from "../../../images";
import { FONT_FAMILY, FONT_COLORS } from "../../../utils/utils";

export const Location = () => {
  return (
    <div
      style={{
        display: "grid",
        width: "90%",
        paddingLeft: "4vw",
        gridTemplateColumns: "repeat(4, 1fr)",
        textAlign: "center",
      }}
    >
      <div style={{ paddingTop: "10vh" }}>
        <span
          style={{
            fontFamily: FONT_FAMILY.MADIMI,
            color: FONT_COLORS.TITLE,
            fontSize: "1vw",
          }}
        >
          Legal
        </span>
        <div
          style={{
            paddingTop: "2vh",
            lineHeight: 3,
            fontFamily: FONT_FAMILY.INRIA,
          }}
        >
          Aviso legal
          <br />
          Política de Cookies
          <br /> Política de privacidad
          <br />
        </div>
      </div>
      <div style={{ paddingTop: "7vh" }}>
        <span
          style={{
            fontFamily: FONT_FAMILY.MADIMI,
            color: FONT_COLORS.TITLE,
            fontSize: "1vw",
          }}
        >
          Sobre nosotros
        </span>
        <div
          style={{
            paddingTop: "2vh",
            lineHeight: 3,
            fontFamily: FONT_FAMILY.INRIA,
          }}
        >
          Quienes somos
          <br />
          Contacto
          <br /> Trabaja con nosotros
          <br />
        </div>
      </div>
      <div style={{ paddingTop: "4vh" }}>
        <span
          style={{
            fontFamily: FONT_FAMILY.MADIMI,
            color: FONT_COLORS.TITLE,
            fontSize: "1vw",
          }}
        >
          Categorias
        </span>
        <div
          style={{
            paddingTop: "2vh",
            lineHeight: 2.5,
            fontFamily: FONT_FAMILY.INRIA,
          }}
        >
          Limpieza
          <br />
          Mantenimiento
          <br /> Abrillantado <br /> Jardineria <br /> Pintura
        </div>
      </div>
      <div
        style={{
          fontFamily: FONT_FAMILY.MADIMI,
          color: FONT_COLORS.TITLE,
          fontSize: "1vw",
          textAlign: "center",
          paddingTop: "3vh",
        }}
      >
        <span>¿Dónde encontrarnos?</span>
        <Link to="https://maps.app.goo.gl/3C1vpsZpQH3XgwNj7" target="_blank">
          <div style={{ paddingTop: "6vh" }}>
            <img
              alt="Click para encontrarnos"
              src={map}
              style={{
                cursor: "pointer",
                width: "90%",
                // height: "100%",
                // border: "1px solid black",
                borderRadius: "3vh",
              }}
            />
            <img
              alt="Click para encontrarnos"
              src={iconMap}
              style={{
                position: "absolute",
                cursor: "pointer",
                width: "10%",
                margin: "-5vh 0 0 -10vw",
                borderRadius: "3vh",
              }}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};
