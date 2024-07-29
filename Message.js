import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Message = ({message}) => {
  return (
    <View style={styles.container}>
      <Text>{message.message}</Text>
      <Text>{message.username}</Text>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
