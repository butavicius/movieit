import React, { useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { initialSortings } from "../api/discoverOptions";

import { parseGenre } from "../api/discoverOptions";
import MovieBackdrop from "../components/MovieBackdrop";
import Screen from "../components/Screen";
import useDetailsApi from "../hooks/useDetailsApi";
import colors from "../config/colors";
import Text from "../components/Text";
import Rating from "../components/Rating";
import MovieList from "../components/Lists/MovieList";

function DetailsScreen() {
  const detailsApi = useDetailsApi(460465);

  if (!detailsApi.movie) return null;
  const {
    title,
    vote_average,
    vote_count,
    genres,
    release_date,
    runtime,
    overview,
  } = detailsApi.movie;
  console.log(detailsApi.movie);
  return (
    <Screen style={styles.container}>
      <ScrollView>
        <MovieBackdrop backdropPath={detailsApi.movie.backdrop_path} />
        <View style={styles.detailsContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>
              {title} ({release_date.slice(0, 4)})
            </Text>
            <View>
              <Rating score={vote_average * 10} radius={40} />
              <Text style={styles.voteCount}>{vote_count} votes</Text>
            </View>
          </View>
          <View style={styles.genresContainer}>
            <Text style={styles.genres}>
              {genres.map((genre) => genre.name).join(", ")}
            </Text>
            <Text style={styles.runtime}>{runtime} min</Text>
          </View>
          <View style={styles.overviewContainer}>
            <Text style={styles.overview}>{overview}</Text>
          </View>
          <View style={styles.similarContainer}>
            <Text style={styles.similar}>Find similar movies</Text>
          </View>
          {genres.map((genre) => (
            <MovieList
              key={genre.id}
              initialSorting={initialSortings.popular}
              initialGenre={genre.id}
            />
          ))}
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {},
  title: { fontSize: 30, flexShrink: 1 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  voteCount: { fontSize: 14, marginTop: 5, textAlign: "center" },
  genresContainer: {
    width: "100%",
    padding: 20,
    backgroundColor: colors.black,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  genres: { flexShrink: 1, color: colors.white },
  runtime: { color: colors.white },
  overviewContainer: {
    padding: 20,
  },
  overview: {
    textAlign: "justify",
  },
  similarContainer: {
    backgroundColor: colors.gold,
    padding: 20,
  },
  similar: { fontWeight: "bold", color: colors.deep, fontSize: 24 },
});

export default DetailsScreen;
