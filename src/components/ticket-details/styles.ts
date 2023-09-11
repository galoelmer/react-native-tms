import { StyleSheet } from "react-native";

export default StyleSheet.create({
  loaderIndicator: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    alignSelf: "center",
    width: "100%",
    maxWidth: 600,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  ticketId: {
    fontSize: 12,
    fontWeight: "bold",
  },
  status: {
    fontSize: 16,
    color: "green",
    fontWeight: "bold",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    marginBottom: 8,
  },
  image: {
    width: "60%",
    height: 400,
    marginBottom: 8,
    borderRadius: 8,
    alignSelf: "center",
  },
  createdAt: {
    fontSize: 14,
    marginBottom: 8,
  },
  description: {
    backgroundColor: "#f0f8ff",
    padding: 10,
    fontSize: 16,
    marginBottom: 8,
    borderRadius: 8,
  },
  statusButton: {
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "rgba(0, 0, 0, 0.37)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.2,
    elevation: 1,
  },
});
