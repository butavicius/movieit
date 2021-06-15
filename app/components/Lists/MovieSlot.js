import React from "react";
import { View, StyleSheet, Image } from "react-native";
import config from "../../api/config";

function MovieSlot({ imageUrl, title, rating }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: config.POSTER_MEDIUM+imageUrl, width: 154, height: 231 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default MovieSlot;
