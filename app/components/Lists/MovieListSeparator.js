import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../../config/colors";

function MovieListSeparator() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: { width: 5, height: "100%", backgroundColor: colors.white },
});

export default MovieListSeparator;
