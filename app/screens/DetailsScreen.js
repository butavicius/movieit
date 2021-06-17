import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { initialSortings } from "../api/discoverOptions";
import { LinearGradient } from "expo-linear-gradient";

import colors from "../config/colors";
import MovieBackdrop from "../components/MovieBackdrop";
import MovieList from "../components/Lists/MovieList";
import PlayButton from "../components/PlayButton";
import Rating from "../components/Rating";
import Screen from "../components/Screen";
import useDetailsApi from "../hooks/useDetailsApi";
import Text from "../components/Text";

function DetailsScreen() {
  const detailsApi = useDetailsApi(460465);
  if (!detailsApi.movie) return null;
  //console.log(detailsApi.movie);
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

  const releaseYear = release_date.slice(0, 4);

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
        <View style={styles.playButtonContainer}>
          <PlayButton visible={true} style={styles.playButton} />
        </View>
        <View style={styles.headerContainer}>
          <View style={styles.titleDirectorContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{title} </Text>
              <Text style={styles.releaseYear}>({releaseYear})</Text>
            </View>
            <View style={styles.directorContainer}>
              <Text style={[styles.label, styles.textBlack]}>Directed by</Text>
              <Text style={styles.director}> {director}</Text>
            </View>
          </View>
          <View>
            <Rating score={vote_average * 10} radius={40} />
            <Text style={styles.voteCount}>{vote_count} votes</Text>
          </View>
        </View>

        <View style={styles.separatorPrimary} />

        <LinearGradient
          style={styles.starsContainer}
          colors={[colors.blue, colors.deep]}
        >
          <Text style={[styles.label, styles.textWhite]}>Stars</Text>
          <Text style={styles.stars}>{stars}</Text>
        </LinearGradient>


        <View
          style={styles.genresContainer}
        >
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
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  label: { fontSize: 14, fontWeight: "bold", marginBottom: 10 },
  textWhite: { color: colors.white },
  textBlack: { color: colors.black },
  separatorPrimary: { height: 2, backgroundColor: colors.gold },

  playButtonContainer: {
    width: "100%",
    position: "absolute",
    top: 405,
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    marginTop: 25,
  },
  titleDirectorContainer: {
    flexShrink: 1,
  },
  titleContainer: { flexDirection: "row", flexWrap: "wrap" },
  title: { fontSize: 30 },
  releaseYear: { fontSize: 28, color: colors.blue },
  voteCount: { fontSize: 14, marginTop: 5, textAlign: "center" },

  directorContainer: {
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "baseline",
  },
  director: { color: colors.black, fontSize: 16 },

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
    marginBottom: 15,
  },
  similar: { fontWeight: "bold", color: colors.deep, fontSize: 24 },
});

export default DetailsScreen;
