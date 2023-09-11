import * as ImagePicker from "expo-image-picker";

import { FormData } from "./types";

export const validateForm = (formData: FormData) => {
  const errors = {} as Partial<FormData>;

  if (formData.name.trim() === "") {
    errors.name = "Name is required";
  }

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (!formData.email.match(emailRegex)) {
    errors.email = "Invalid email address";
  }

  if (formData.description.trim() === "") {
    errors.description = "Description is required";
  }

  return errors;
};

export const imagePick = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
    base64: true,
  });

  if (!result.canceled && result.assets[0].base64) {
    return {
      uri: result.assets[0].uri,
      base64: result.assets[0].base64,
    };
  }

  return {
    canceled: result.canceled,
    uri: "",
    base64: "",
  };
};
