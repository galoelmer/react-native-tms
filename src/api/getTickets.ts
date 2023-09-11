import axios from "axios";
import { Platform } from "react-native";

async function getTickets() {
  try {
    const url =
      Platform.OS === "web"
        ? "/api/getTickets"
        : "https://regal-boba-3e4bb3.netlify.app/.netlify/functions/getTickets";

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export default getTickets;
