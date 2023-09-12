import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
  formContainer: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
    alignSelf: "center",
    width: "100%",
    maxWidth: 600,
  },
  error: {
    color: "tomato",
    fontSize: 12,
  },
  input: {
    padding: 10,
    marginBottom: 16,
    borderRadius: 8,
    borderColor: "#E0E4EA",
    borderWidth: 1,
  },
  multilineInput: {
    height: 180,
  },
  uploadImageButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: "#6C63FF",
  },
  uploadImageButtonText: {
    color: "#ffffff",
    letterSpacing: 1,
    fontWeight: "500",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    marginBottom: 16,
  },
  submitButton: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderRadius: 8,
    marginTop: 40,
    backgroundColor: "#000000",
  },
  submitButtonText: {
    color: "#ffffff",
    letterSpacing: 1,
    fontWeight: "bold",
    fontSize: 16,
  },
  successText: {
    color: "#ba63ff",
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 1.2,
  },
  generalErrorText: {
    color: "tomato",
    textAlign: "center",
    letterSpacing: 1,
  },
});
