import { StyleSheet } from "react-native";
import Colors from "../Constants/Colors";

const mainStyles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.background,
    paddingTop: 40,
  },
  cardContainer: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  cardContainerSpecific: {
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    height: 100,
    marginVertical: 10,
    flexDirection: "row",
  },
  cardLeftContainer: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    height: "100%",
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.secondary,
  },
  cardRightContainer: {
    justifyContent: "center",
    paddingLeft: 15,
  },
  cardImage: {
    width: 65,
    height: 65,
  },
  cardTitle: {
    fontSize: 20,
  },
  cardLMContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardLMText: {
    color: Colors.grey,
    fontSize: 15,
    paddingRight: 3,
  },
  buttonContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderColor: "#fff",
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 20,
    color: "#000",
    textTransform: "uppercase",
  },
});

export { mainStyles };
