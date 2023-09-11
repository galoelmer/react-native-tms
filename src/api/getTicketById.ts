import axios from "axios";
import { Platform } from "react-native";

async function getTicketById(id: string) {
  try {
    const url =
      Platform.OS === "web"
        ? `/api/getTicketById?id=${id}`
        : `https://regal-boba-3e4bb3.netlify.app/.netlify/functions/getTicketById?id=${id}`;

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export default getTicketById;
