import { FONT_COLORS, FONT_FAMILY } from "../../utils/utils";
import { Location } from "./Footer/Location";
import { FooterContact } from "./Footer/FooterContact";

export default function Footer() {
  return (
    <>
      <div
        style={{
          // maxHeight: "35vh",
          background: "rgb(220, 209, 238, 0.6)",
          borderTopLeftRadius: "50%",
          borderTopRightRadius: "50%",
          paddingBottom: "1%",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "49.85%",
            paddingTop: "10px",
          }}
        >
          <Location />
        </div>
        <div
          style={{
            width: "0.4%",
            height: "28vh",
            background: FONT_COLORS.YELLOW,
            marginTop: "2%",
          }}
        />
        <div
          style={{
            width: "49.85%",
            padding: "30px 0 0 0px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 60,
            fontFamily: FONT_FAMILY.NOVA_FLAT,
          }}
        >
          <FooterContact />
        </div>
      </div>
      <span
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: FONT_FAMILY.INRIA,
          fontSize: "14px",
          background: "rgb(220, 209, 238, 0.6)",
        }}
      >
        Planserm 2024 - All rigths reseved
      </span>
    </>
  );
}
