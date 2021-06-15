import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";

import discoverPresets from "../api/discoverPresets";

import MovieList from "../components/Lists/MovieList";
import Screen from "../components/Screen";
function MainScreen() {

  return (
    <Screen style={styles.container}>
      <MovieList parameters={discoverPresets.popularMovies} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default MainScreen;
