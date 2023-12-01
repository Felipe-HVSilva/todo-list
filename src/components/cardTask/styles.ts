import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardTask: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#262626",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#333",

    marginTop: 20,
  },
  cardText: {
    fontSize: 14,
    color: "#f2f2f2",
    fontWeight: "400",
    lineHeight: 19,
    flex: 1,
  },
  cardTextCompleted: {
    color: "#808080",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 19,
    flex: 1,
    textDecorationLine: "line-through",
  },
  trashTask: {
    color: "red",
    fontSize: 16,
    fontWeight: "700",
  },
});
