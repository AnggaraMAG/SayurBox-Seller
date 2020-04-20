import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginTop: 25
  },
  header: {
    flex: 1,
    flexDirection: "row"
  },
  card: {
    flex: 1,
    margin: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 150,
    borderRadius: 15,
    backgroundColor: "#f8f8f8",
    // shadowColor: "#39853c",
    // shadowOffset: {
    //   width: 0,
    //   height: 10
    // },
    // shadowOpacity: 0.51,
    // shadowRadius: 13.16,

    elevation: 5
  },

  header1: {
    flex: 1,
    flexDirection: "row"
  },
  card1: {
    margin: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 185,
    height: 150,
    borderRadius: 15,
    backgroundColor: "#f8f8f8",
    // shadowColor: "#39853c",
    // shadowOffset: {
    //   width: 0,
    //   height: 10
    // },
    // shadowOpacity: 0.51,
    // shadowRadius: 13.16,

    elevation: 5
  }
});
