import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";

import details from "../api/details";
import MovieBackdrop from "../components/MovieBackdrop";
import Screen from "../components/Screen";
import useDetailsApi from "../hooks/useDetailsApi";

function DetailsScreen() {
  const detailsApi = useDetailsApi(460465);
  console.log(detailsApi.movie);
  return (
    <Screen style={styles.container}>
      <ScrollView>
        <MovieBackdrop backdropPath={detailsApi.movie.backdrop_path} />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default DetailsScreen;
