import axios from "axios";
import { Platform } from "react-native";

import uploadImageToImgBB from "./uploadImage";

async function postTicket(formData: any) {
  try {
    const imageUrl =
      formData.imageUrl === ""
        ? ""
        : await uploadImageToImgBB(formData.imageUrl);
    const url =
      Platform.OS === "web"
        ? "/api/createTicket"
        : "https://regal-boba-3e4bb3.netlify.app/.netlify/functions/createTicket";

    const data = JSON.stringify({
      ...formData,
      imageUrl,
    });

    const config = {
      method: "POST",
      url,
      headers: {
        "Content-Type": "application/json",
      },
      data,
    };

    const response = await axios.request(config);
    return JSON.stringify(response.data);
  } catch (error) {
    throw error;
  }
}

export default postTicket;
