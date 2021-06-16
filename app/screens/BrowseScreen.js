import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";

import { initialSortings } from "../api/discoverOptions";

import MovieList from "../components/Lists/MovieList";
import Screen from "../components/Screen";
//import {
//   GlobalParamsContext,
//   GlobalParamsContextProvider,
// } from "../contexts/GlobalParams";
function BrowseScreen() {
  const [globalParams, setGlobalParams] = useState({});
  return (
    <Screen style={styles.container}>
      {/* <GlobalParamsContextProvider> */}
      <ScrollView>
        <MovieList initialSorting={initialSortings.popular} />
        <MovieList initialSorting={initialSortings.newest} />
        <MovieList initialSorting={initialSortings.best} />
      </ScrollView>
      {/* </GlobalParamsContextProvider> */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default BrowseScreen;
