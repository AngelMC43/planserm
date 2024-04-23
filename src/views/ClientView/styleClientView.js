export const styleClientView = {
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    height: "81vh",
  },
  borderContainer: {
    border: "2px solid #a7a7a7",
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
  title: (FONT_FAMILY) => ({ fontSize: "2vw", fontFamily: FONT_FAMILY.MADIMI }),
  addIcon: (FONT_FAMILY) => ({
    fontSize: "1.5vw",
    fontFamily: FONT_FAMILY.MADIMI,
  }),
  tableContainer: { display: "flex", justifyContent: "center" },
  tableSize: {
    width: "96%",
    marginTop: "2%",
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
