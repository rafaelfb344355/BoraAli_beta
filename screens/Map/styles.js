import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#162397",
    overflow: "hidden",
  },
  mapcontainer: {
    width: "100%",
    height: "70%",
    overflow: "hidden",
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
  },
  map: {
    flex: 1,
  },
  card: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
    padding: 16,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  switchLabel: {
    marginLeft: 8,
  },
  bt: {
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#FF7A00",
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#012758",
    borderColor: "#FFFAF5",
    borderWidth: 1,
    borderRadius: 20,
    width: "70%",
    height: 40,
  },
});
