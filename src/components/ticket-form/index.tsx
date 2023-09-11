import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import postTicket from "../../api/postTicket";
import { validateForm, imagePick } from "./utils";

import styles from "./styles";
import { FormData } from "./types";

const TicketForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    imageUrl: "",
  });

  const [errors, setErrors] = useState<
    Partial<FormData> & { general?: string }
  >();
  const [image, setImage] = useState<string | null>(null);
  const [imageBase64, setImageBase64] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleImagePick = async () => {
    const result = await imagePick();

    if (!result.canceled) {
      setImage(result.uri);
      setImageBase64(result.base64);
    }
  };

  const handleSubmit = async () => {
    setSuccess(false);
    const errors = validateForm(formData);

    if (Object.keys(errors).length === 0) {
      setIsLoading(true);

      try {
        await postTicket({ ...formData, imageUrl: imageBase64 });

        setFormData({
          name: "",
          email: "",
          description: "",
          imageUrl: "",
        });
        setImage(null);
        setImageBase64("");
        setErrors({});
        setSuccess(true);
      } catch (error) {
        setErrors({
          ...errors,
          general: "Something went wrong. Please try again later.",
        });
      } finally {
        setIsLoading(false);
      }
    } else {
      setErrors(errors);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        {errors?.name && <Text style={styles.error}>{errors.name}</Text>}
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={formData.name}
          onChangeText={(text) => setFormData({ ...formData, name: text })}
          accessibilityLabel="Name Input"
        />

        {errors?.email && <Text style={styles.error}>{errors.email}</Text>}
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={formData.email}
          onChangeText={(text) => setFormData({ ...formData, email: text })}
          keyboardType="email-address"
          accessibilityLabel="Email Input"
        />

        {errors?.description && (
          <Text style={styles.error}>{errors.description}</Text>
        )}
        <TextInput
          style={[styles.input, styles.multilineInput]}
          placeholder="Enter your description"
          value={formData.description}
          onChangeText={(text) =>
            setFormData({ ...formData, description: text })
          }
          multiline
          accessibilityLabel="Description Input"
        />

        <Pressable
          onPress={handleImagePick}
          style={styles.uploadImageButton}
          accessibilityLabel="Upload Image Button"
          disabled={isLoading}
        >
          <Text style={styles.uploadImageButtonText}>UPLOAD IMAGE</Text>
          <Ionicons
            name="cloud-upload"
            size={24}
            color="#ffffff"
            style={{ marginLeft: 10 }}
          />
        </Pressable>

        {image && (
          <Image
            source={{ uri: image }}
            style={styles.image}
            accessibilityLabel="Uploaded Image"
          />
        )}

        <Pressable
          onPress={handleSubmit}
          style={styles.submitButton}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator size={25} color="#ffffff" />
          ) : (
            <Text style={styles.submitButtonText}>SUBMIT</Text>
          )}
        </Pressable>
        {success && (
          <Text style={styles.successText}>We received your message!</Text>
        )}
        {errors?.general && (
          <Text style={styles.generalErrorText}>{errors.general}</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default TicketForm;
