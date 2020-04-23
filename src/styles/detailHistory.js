import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15
  },
  header: {
    flexDirection: "row",
    backgroundColor: "white",
    margin: 5,
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
    padding: 3,
    height: 80
  },
  card1: {
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    margin: 5
  },
  card2: {
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center"
  },
  card3: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15
  },
  cardHeader2: {
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "center",
    margin: 5,
    padding: 5
  },
  cardHeader3: {
    flexDirection: "row",
    backgroundColor: "white",
    margin: 5,
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
    padding: 3
  },
  cardTotal: {
    backgroundColor: "white",
    margin: 5
  },
  btn: {
    backgroundColor: "#43B3F9",
    justifyContent: "center",
    margin: 5,
    padding: 5,
    bottom: 0
  }
});
