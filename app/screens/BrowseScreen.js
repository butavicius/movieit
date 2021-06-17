import React from "react";
import { ScrollView } from "react-native";

import { initialSortings } from "../api/discoverOptions";

import MovieList from "../components/Lists/MovieList";
import Screen from "../components/Screen";

function BrowseScreen() {
  return (
    <Screen>
      <ScrollView>
        <MovieList initialSorting={initialSortings.popular} />
        <MovieList initialSorting={initialSortings.newest} />
        <MovieList initialSorting={initialSortings.best} />
      </ScrollView>
    </Screen>
  );
}

export default BrowseScreen;
