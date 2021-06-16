import React from "react";
import { View, StyleSheet, Image } from "react-native";

import config from "../api/config";

function MovieBackdrop({ backdropPath }) {
  const { BACKDROP_BASE, BACKDROP_HEIGHT, BACKDROP_WIDTH } = config;

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: BACKDROP_BASE + backdropPath,
          width: BACKDROP_WIDTH,
          height: BACKDROP_HEIGHT,
        }}
        style={styles.backdrop}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  backdrop: { width: "100%" },
});

export default MovieBackdrop;
