import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";

import details from "../api/details";
import Screen from "../components/Screen";
import useDetailsApi from "../hooks/useDetailsApi";

function DetailsScreen() {
  const detailsApi = useDetailsApi(337404);
  console.log(detailsApi.movie);
  return (
    <Screen style={styles.container}>
      <ScrollView></ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default DetailsScreen;
