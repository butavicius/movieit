import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { initialSortings } from "../api/discoverOptions";

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
  console.log(detailsApi.movie);
  const {
    title,
    vote_average,
    vote_count,
    genres,
    release_date,
    runtime,
    overview,
    credits,
  } = detailsApi.movie;

  const stars = credits.cast
    .slice(0, 3)
    .map((actor) => actor.name)
    .join(", ");

  const director = credits.crew.filter((person) => person.job === "Director")[0]
    .name;
  console.log("director is", director);
  //console.log(detailsApi.movie);
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
          <View style={styles.directorContainer}>
            <Text style={[styles.label, styles.textBlack]}>Director: </Text>
            <Text style={styles.director}>{director}</Text>
          </View>
          <View style={styles.separatorPrimary} />
          <View style={styles.starsContainer}>
            <Text style={[styles.label, styles.textWhite]}>Stars</Text>
            <Text style={styles.stars}>{stars}</Text>
          </View>
          <View style={styles.separatorSecondary} />
          <View style={styles.genresContainer}>
            <Text style={styles.genres}>
              {genres.map((genre) => genre.name).join(", ")}
            </Text>
            <Text style={styles.runtime}>{runtime} min</Text>
          </View>
          <View style={styles.separatorPrimary} />
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
  label: { fontSize: 14, fontWeight: "bold", marginBottom: 10 },
  textWhite: { color: colors.white },
  textBlack: { color: colors.black },
  separatorPrimary: { height: 2, backgroundColor: colors.gold },
  separatorSecondary: { height: 2, backgroundColor: colors.deep },
  title: { fontSize: 30, flexShrink: 1 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  voteCount: { fontSize: 14, marginTop: 5, textAlign: "center" },
  directorContainer: { padding: 20, flexDirection: "row" },
  director: { color: colors.black, fontSize: 14 },
  starsContainer: {
    padding: 20,
    backgroundColor: colors.blue,
  },
  stars: { color: colors.white, fontSize: 14 },
  genresContainer: {
    width: "100%",
    padding: 20,
    backgroundColor: colors.black,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  genres: { flexShrink: 1, color: colors.white, fontSize: 14 },
  runtime: { color: colors.white, fontSize: 14 },
  overviewContainer: {
    padding: 20,
  },
  overview: {
    textAlign: "justify",
    fontSize: 16,
  },
  similarContainer: {
    backgroundColor: colors.gold,
    padding: 20,
  },
  similar: { fontWeight: "bold", color: colors.deep, fontSize: 24 },
});

export default DetailsScreen;
