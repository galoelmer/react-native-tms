import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const EmailReplyScreen = ({ route, navigation }: any) => {
  const [senderEmail, setSenderEmail] = useState("");
  const [replyText, setReplyText] = useState("");
  const [error, setError] = useState(false);

  const { email } = route.params;

  const handleUserEmailNameChange = (text: string) => {
    setSenderEmail(text);
  };

  const handleReplyChange = (text: string) => {
    setReplyText(text);
  };

  const handleSendReply = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (
      senderEmail.trim() === "" ||
      !senderEmail.match(emailRegex) ||
      replyText.trim() === ""
    ) {
      setError(true);
      return;
    }

    // Implement logic to send the email reply
    console.log({
      to: email,
      from: senderEmail,
      message: replyText,
    });

    setSenderEmail("");
    setReplyText("");
    setError(false);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>To:</Text>
      <TextInput
        style={styles.input}
        placeholder="Send To (Receiver Email)"
        value={email}
        editable={false}
      />
      <Text>From:</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={handleUserEmailNameChange}
        value={senderEmail}
      />
      <TextInput
        style={[styles.input, { height: 180 }]}
        placeholder="Type your reply here..."
        onChangeText={handleReplyChange}
        value={replyText}
        multiline={true}
        textAlignVertical="top"
      />
      <Button
        title="Send Reply"
        onPress={handleSendReply}
        disabled={!senderEmail.trim() || !replyText.trim()}
      />
      {error && (
        <Text style={styles.errorMessage}>Please fill all the fields</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignSelf: "center",
    width: "100%",
    maxWidth: 600,
    backgroundColor: "#fff",
    marginTop: 20,
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    fontSize: 16,
  },
  errorMessage: {
    color: "red",
    fontSize: 16,
    marginTop: 8,
    textAlign: "center",
    width: "100%",
    marginBottom: 16,
  },
});

export default EmailReplyScreen;
