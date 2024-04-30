import { FONT_COLORS, FONT_FAMILY } from "../../utils/utils";

export const styleClientView = {
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    height: "86vh",
  },
  borderContainer: {
    border: "1px solid #b7b7b7",
    borderRadius: "6vh",
    width: "88%",
    margin: "3% 0 0 4%",
    background: "#f0f0f0",
    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.2)",
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
    width: "100%",
  },
};

export const styleClientTable = {
  tableContainer: {
    marginTop: "2%",
    borderRadius: "3vh",
    minHeight: "60vh",
    maxHeight: "60vh",
    width: "93%",
    overflow: "auto",
    boxShadow: "4px 4px 4px  rgba(0, 0, 0, 0.2)",
  },
};

export const boxMUIStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid #b7b7b7",
  borderRadius: "5vh",
  boxShadow: 24,
  p: 4,
};

export const styleColumns = {
  fontWeight: "bolder",
  background: "red !important",
};
