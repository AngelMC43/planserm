export const footerStyles = {
  contactContainer: {
    width: "45%",
    display: "ruby",
  },

  contactDetailBox: {
    marginBottom: "1px",
    boxShadow:
      "0 1px 0 rgba(255, 255, 255, 0.9) inset, 0 -1px 2px rgba(0, 0, 0, 0.1),  0 1px 1px rgba(0, 0, 0, 0.1)",
    color: "#dadada",
    padding: "8px 40px 5px 25px",
    borderRadius: "10vh 10vh 10vh 10vh",
    textAlign: "center",
    cursor: "pointer",
    transition: "all 0.5s ease",
  },

  networkIcons: {
    gap: 20,
    display: "flex",
    paddingTop: "5%",
  },
};

export const networkBox = (FONT_COLORS) => ({
  width: "45%",
  paddingTop: "4%",
  height: "14vh",
  fontSize: 20,
  color: FONT_COLORS.TITLE,
});
