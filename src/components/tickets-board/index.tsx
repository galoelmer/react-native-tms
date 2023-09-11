import { useEffect, useState } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Pressable,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import getTickets from "../../api/getTickets";
import formatDate from "../../utils/formatDate";

import { TicketData } from "./types";
import styles from "./styles";

const TableHeader = () => {
  return (
    <View style={styles.headerRow}>
      <View style={styles.headerCell}>
        <Text style={styles.headerText}>Requester</Text>
      </View>
      <View style={styles.headerCell}>
        <Text style={styles.headerText}>Status</Text>
      </View>
      <View style={styles.headerCell}>
        <Text style={styles.headerText}>Date Created</Text>
      </View>
    </View>
  );
};

const TableRow = (item: TicketData, index: number) => {
  const handleItemPress = () => {
    console.log("press...", item._id);
  };

  const rowStyle = index % 2 === 0 ? styles.tableEvenRow : styles.tableOddRow;

  return (
    <Pressable onPress={handleItemPress}>
      <View style={styles.headerRow}>
        <View style={[styles.headerCell, rowStyle]}>
          <Text style={styles.tableRowText}>{item.name}</Text>
        </View>
        <View style={[styles.headerCell, rowStyle]}>
          <Text style={styles.tableRowText}>{item.status}</Text>
        </View>
        <View style={[styles.headerCell, rowStyle]}>
          <Text style={styles.tableRowText}>{formatDate(item.createdAt)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const TicketBoard = () => {
  const [data, setData] = useState<TicketData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getData = async () => {
    setIsLoading(true);
    getTickets()
      .then((data) => setData(data))
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <ActivityIndicator size={24} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TableHeader />
      <FlatList
        data={data}
        renderItem={({ item, index }) => TableRow(item, index)}
      />
      <Pressable onPress={getData} style={styles.refreshButton}>
        <Ionicons name="refresh" size={24} color="black" />
        <Text>Refresh</Text>
      </Pressable>
    </View>
  );
};

export default TicketBoard;
