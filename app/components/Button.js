import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function Button({ title, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress} style={{ width: "100%" }}>
      <View style={[styles.button, style]}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "uppercase",
  },
});

export default Button;
