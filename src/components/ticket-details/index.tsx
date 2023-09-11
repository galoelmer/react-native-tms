import { useEffect, useState } from "react";
import { Text, View, ActivityIndicator, Image, ScrollView } from "react-native";

import getTicketById from "../../api/getTicketById";
import formatDate from "../../utils/formatDate";

import styles from "./styles";

const TicketDetails = ({ route }: any) => {
  const [ticketData, setTicketData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { ticketId } = route.params;

  const loadTicketData = async () => {
    try {
      const data = await getTicketById(ticketId);
      setTicketData(data);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadTicketData();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loaderIndicator}>
        <ActivityIndicator size={24} />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.ticketId}>Ticket ID: {ticketData._id}</Text>
        <Text style={styles.status}>Status: {ticketData.status}</Text>
      </View>
      <Text style={styles.name}>Name: {ticketData.name}</Text>
      <Text style={styles.email}>Email: {ticketData.email}</Text>
      {ticketData.imageUrl && (
        <Image source={{ uri: ticketData.imageUrl }} style={styles.image} />
      )}
      <Text style={styles.createdAt}>
        Created: {formatDate(ticketData.createdAt)}
      </Text>
      <Text style={styles.description}>{ticketData.description}</Text>
    </ScrollView>
  );
};

export default TicketDetails;
