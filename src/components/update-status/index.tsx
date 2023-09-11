import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useState, useEffect } from "react";

import updateTicketStatus from "../../api/updateTicketStatus";

const UpdateTicketStatus = ({ route, navigation }: any) => {
  const [status, setStatus] = useState<string>("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { ticketId, currentStatus } = route.params;
  const previousStatus = currentStatus;

  useEffect(() => {
    setStatus(currentStatus);
  }, []);

  const updateStatus = async (status: string) => {
    setStatus(status);
  };

  const handleBackNavigation = (status: string) => {
    navigation.navigate({
      name: "Ticket Details",
      params: { status },
      merge: true,
    });
  };

  const handleUpdateTicketStatus = async () => {
    if (status === "new") {
      handleBackNavigation(previousStatus);
      return;
    }

    setError(false);
    setIsLoading(true);
    try {
      await updateTicketStatus(ticketId, status);
      handleBackNavigation(status);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.selectionContainer}>
        <Pressable
          style={[styles.button, status === "new" && styles.activeButton]}
          onPress={() => updateStatus("new")}
        >
          <Text style={styles.buttonText}>New</Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            status === "in progress" && styles.activeButton,
          ]}
          onPress={() => updateStatus("in progress")}
        >
          <Text style={styles.buttonText}>In Progress</Text>
        </Pressable>
        <Pressable
          style={[styles.button, status === "resolved" && styles.activeButton]}
          onPress={() => updateStatus("resolved")}
        >
          <Text style={styles.buttonText}>Resolved</Text>
        </Pressable>
      </View>
      <Pressable style={styles.saveButton} onPress={handleUpdateTicketStatus}>
        {isLoading ? (
          <ActivityIndicator size={25} color="#ffffff" />
        ) : (
          <Text style={styles.saveButtonText}>Save</Text>
        )}
      </Pressable>
      {error && (
        <Text style={styles.errorMessage}>
          Something went wrong! Try again later.
        </Text>
      )}
    </View>
  );
};

export default UpdateTicketStatus;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignSelf: "center",
    width: "100%",
    maxWidth: 600,
  },
  selectionContainer: {
    margin: 15,
  },
  button: {
    backgroundColor: "#cccdce",
    padding: 10,
    borderColor: "#989696",
    borderWidth: 1,
    margin: 0,
  },
  activeButton: {
    backgroundColor: "#b4b0ff",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    letterSpacing: 1,
  },
  saveButton: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 12,
    borderRadius: 8,
    marginBottom: 40,
    backgroundColor: "#6C63FF",
  },
  saveButtonText: {
    color: "#ffffff",
    letterSpacing: 1,
    fontWeight: "500",
    fontSize: 20,
  },
  errorMessage: {
    color: "red",
    padding: 15,
    textAlign: "center",
  },
});
