import { StyleSheet } from "react-native";
export default StyleSheet.create({
  // cards example
  cardContainer: {
    width: 320,
    height: 470,
  },
  card: {
    width: 320,
    height: 500,
    backgroundColor: "#000",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    borderColor: "#222",
    borderWidth: 1,
    padding: "5%",
  },
  card1: {
    backgroundColor: "#FFF",
  },
  card2: {
    backgroundColor: "#000",
  },
  label: {
    lineHeight: 470,
    textAlign: "center",
    fontSize: 55,
    fontFamily: "System",
    color: "#ffffff",
    backgroundColor: "transparent",
  },
  prompt: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17,
    marginBottom: "3%",
  },
  textRow: {
    marginBottom: "5%",
  },
  textBold: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#222",
    marginRight: "1%",
    marginBottom: "1%",
  },
  text: {
    fontSize: 14,
    color: "#222",
  },
  textBoldInverted: {
    color: "#FFF",
  },
  textInverted: {
    color: "#FFF",
  },
});
