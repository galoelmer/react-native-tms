import axios from "axios";

async function uploadImageToImgBB(imageBase64: string): Promise<string> {
  const expiration = 604800; // image hosting expires after one week
  const apiUrl = `https://api.imgbb.com/1/upload?expiration=${expiration}&key=f3a9e85442fb69c7b7197415e45934f3`;

  const formData = new FormData();
  formData.append("image", imageBase64);

  try {
    const { data } = await axios.post(apiUrl, formData, {
      headers: {
        "Content-type": "multipart/form-data",
      },
    });

    return data.data.url;
  } catch (error) {
    throw error;
  }
}

export default uploadImageToImgBB;
