import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignSelf: "center",
    width: "100%",
    maxWidth: 600,
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
    overflow: "hidden",
    marginTop: 10,
  },
  headerRow: {
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  headerCell: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  headerText: {
    fontWeight: "bold",
  },
  tableRowText: {},
  tableOddRow: {
    backgroundColor: "#e1dfdf",
  },
  tableEvenRow: {
    backgroundColor: "#ffffff",
  },
  refreshButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});
