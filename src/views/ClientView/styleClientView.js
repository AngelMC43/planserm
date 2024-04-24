import { FONT_COLORS, FONT_FAMILY } from "../../utils/utils";

export const styleClientView = {
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    height: "81vh",
  },
  borderContainer: {
    border: "1px solid grey",
    borderRadius: "6vh",
    width: "75%",
    marginTop: "3%",
  },
  marginContainer: {
    margin: "3% 0 0 5%",
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "95%",
  },
  title: {
    fontSize: "2vw",
    color: FONT_COLORS.ICONS,
    fontFamily: FONT_FAMILY.MADIMI,
  },
  addIcon: {
    fontSize: "1.5vw",
    color: FONT_COLORS.ICONS,
    fontFamily: FONT_FAMILY.MADIMI,
  },
  tableContainer: {
    display: "flex",
    justifyContent: "center",
  },
};

export const boxMUIStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "5vh",
  boxShadow: 24,
  p: 4,
};

export const styleClientTable = {
  tableContainer: {
    marginTop: "2%",
    borderRadius: "3vh",
    minHeight: "58vh",
    maxHeight: "58vh",
    overflow: "auto",
  },
};
