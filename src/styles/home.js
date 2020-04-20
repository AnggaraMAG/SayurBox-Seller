import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    margin: 15
  },
  card: {
    margin: 15,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 150,
    borderRadius: 15,
    backgroundColor: "#439D46",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20
  }
});
