import React from "react";
import { View, StyleSheet } from "react-native";

import ProgressCircle from "react-native-progress-circle";

import Text from "./Text";
import colors from "../config/colors";

function Rating({ score, style, radius = 50, fontSize = 30 }) {
  return (
    <View style={style}>
      <ProgressCircle
        percent={score}
        radius={radius}
        borderWidth={8}
        color={colors.gold}
        shadowColor={colors.blue}
        bgColor={colors.black}
      >
        <Text style={[styles.percentage, { fontSize }]}>
          {score > 0 ? score : "N/A"}
        </Text>
      </ProgressCircle>
    </View>
  );
}

const styles = StyleSheet.create({
  percentage: {
    fontWeight: "bold",
    color: colors.white,
  },
});

export default Rating;
