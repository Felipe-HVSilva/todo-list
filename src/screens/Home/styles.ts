import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  header: {
    paddingTop: 70,
    paddingBottom: 70,
    backgroundColor: "#0D0D0D",

    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    flexDirection: "row",
    gap: 4,
    paddingHorizontal: 24,
    marginTop: -30,
  },
  input: {
    flex: 1,
    borderRadius: 6,
    backgroundColor: "#262626",
    height: 54,
    padding: 16,

    color: "#808080",
    fontSize: 16,
  },
  textInput: {
    color: "#fff",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#1E6F9F",
    padding: 18,
    borderRadius: 6,
  },
  taskList: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 55,
  },
  taskListHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  taskInfo: {
    flexDirection: "row",
    gap: 8,
  },
  taskTitleCreate: {
    color: "#4EA8DE",
    fontSize: 14,
    fontWeight: "700",
  },
  taskTitleCompleted: {
    color: "#8284FA",
    fontSize: 14,
    fontWeight: "700",
  },
  buttonInfoTask: {
    width: 25,
    height: 19,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#333",
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
  },
});
