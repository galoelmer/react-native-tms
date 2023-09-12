import { StyleSheet } from "react-native";

export default StyleSheet.create({
  loaderIndicator: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  container: {
    backgroundColor: "#fff",
    padding: 16,
    alignSelf: "center",
    width: "100%",
    maxWidth: 600,
  },
  header: {
    padding: 10,
  },
  headerText: {
    fontSize: 14,
    fontWeight: "800",
    letterSpacing: 1,
    marginVertical: 5,
  },
  statusText: {
    fontSize: 16,
    color: "green",
    fontWeight: "bold",
    marginVertical: 5,
  },

  image: {
    width: "60%",
    height: 400,
    marginBottom: 8,
    borderRadius: 8,
    alignSelf: "center",
  },
  descriptionWrapper: {
    backgroundColor: "#f0f8ff",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  descriptionHeader: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
  attachmentButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: "#04031e",
  },
  statusButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: "#6C63FF",
  },
  replyButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    marginBottom: 40,
    backgroundColor: "#ff786e",
  },
  modalCenteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalCloseButton: {
    position: "absolute",
    top: 0,
    right: 30,
  },
});
