import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "transparent",
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  recommendedCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginRight: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  recommendedImage: {
    width: 120,
    height: 120,
    marginBottom: 8,
  },
  recommendedTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  recommendedSubtitle: {
    fontSize: 14,
    color: "#888",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    marginRight: 8,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  cardImage: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 70,
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12,
    color: "#888",
    textAlign: "center",
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
  fab1: {
    position: "absolute",
    margin: 16,
    left: 0,
    bottom: 0,
  },
});
