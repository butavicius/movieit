import React from "react";
import { View, StyleSheet } from "react-native";

function MovieListSeparator(props) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: { width: 5, height: "100%", backgroundColor: "white" },
});

export default MovieListSeparator;
