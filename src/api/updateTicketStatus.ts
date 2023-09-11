import axios from "axios";
import { Platform } from "react-native";

async function updateTicketStatus(id: string, status: string) {
  try {
    const url =
      Platform.OS === "web"
        ? `/api/updateTicketStatus?id=${id}`
        : `https://regal-boba-3e4bb3.netlify.app/.netlify/functions/updateTicketStatus?id=${id}`;

    const data = JSON.stringify({ status });

    const config = {
      method: "put",
      url,
      data,
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export default updateTicketStatus;
