import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function Button({ title, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={[styles.button, style]}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { width: "100%" },
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.gold,
    backgroundColor: colors.deep,
    padding: 5,
    marginVertical: 10,
  },
  text: {
    padding: 10,
    color: colors.white,
    fontWeight: "bold",
    fontSize: 14,
    textTransform: "uppercase",
  },
});

export default Button;
