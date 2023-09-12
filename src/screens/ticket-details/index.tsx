import { useEffect, useState } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  Image,
  ScrollView,
  Pressable,
  Modal,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import getTicketById from "../../api/getTicketById";
import formatDate from "../../utils/formatDate";

import styles from "./styles";

const TicketDetails = ({ route, navigation }: any) => {
  const [ticketData, setTicketData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const { ticketId, status: currentStatus } = route.params;

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

  const handleStatusPress = () => {
    navigation.navigate("Update Status", {
      ticketId,
      currentStatus: currentStatus ?? ticketData.status,
    });
  };

  const handleReplyPress = () => {
    navigation.navigate("Reply Form", { email: ticketData.email });
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
        <Text style={styles.headerText}>Ticket ID: {ticketData._id}</Text>
        <Text style={styles.headerText}>Name: {ticketData.name}</Text>
        <Text style={styles.headerText}>Email: {ticketData.email}</Text>
        <Text style={styles.headerText}>
          Created: {formatDate(ticketData.createdAt)}
        </Text>
        <Text style={styles.statusText}>
          Status: {currentStatus ?? ticketData.status}
        </Text>
      </View>
      <View style={styles.descriptionWrapper}>
        <Text style={styles.descriptionHeader}>Message:</Text>
        <Text style={styles.description}>{ticketData.description}</Text>
      </View>
      <View>
        {ticketData.imageUrl && (
          <Pressable
            onPress={() => setModalVisible(true)}
            style={styles.attachmentButton}
          >
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="images-sharp" size={18} color="#fff" />
              <Text style={{ marginLeft: 10, color: "#fff" }}>
                See Attachment
              </Text>
            </View>
          </Pressable>
        )}
        <Pressable onPress={handleStatusPress} style={styles.statusButton}>
          <Text style={{ color: "#fff" }}>Update Status</Text>
        </Pressable>
        <Pressable onPress={handleReplyPress} style={styles.replyButton}>
          <Text style={{ color: "#fff" }}>Reply</Text>
        </Pressable>
      </View>
      <Modal animationType="fade" visible={modalVisible}>
        <View style={styles.modalCenteredView}>
          <Pressable
            onPress={() => setModalVisible(false)}
            style={styles.modalCloseButton}
          >
            <Ionicons name="close" size={30} color="black" />
          </Pressable>
          {ticketData.imageUrl && (
            <Image source={{ uri: ticketData.imageUrl }} style={styles.image} />
          )}
        </View>
      </Modal>
    </ScrollView>
  );
};

export default TicketDetails;
