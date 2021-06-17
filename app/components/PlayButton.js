import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import Text from "../components/Text";

function PlayButton({ onPress, visible, style }) {
  if (!visible) return null;

  return (
    <TouchableOpacity onPress={onPress}>
        <LinearGradient style={[styles.container, style]}colors={[colors.blue, colors.deep]}>
          <MaterialCommunityIcons
            name="play-box-multiple"
            style={styles.icon}
          />
          <Text style={styles.text}>WATCH TRAILER</Text>
        </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 60,
    backgroundColor: colors.blue,
    borderRadius: 10,
    borderColor: colors.gold,
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 30,
    color: colors.white,
  },
  text: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 10,
  },
});

export default PlayButton;
