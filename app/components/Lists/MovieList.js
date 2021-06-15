import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";

import useDiscoverApi from "../../hooks/useDiscoverApi";
import Button from "../Button";
import MovieListSeparator from "./MovieListSeparator";
import MovieSlot from "./MovieSlot";

function MovieList({ parameters }) {
  const discoverApi = useDiscoverApi(parameters);

  useEffect(() => {
    discoverApi.requestNextPage();
  }, []);

  return (
    <View style={styles.container}>
      {discoverApi.error && (
        <>
          <Text>Oops! Could not get data from server.</Text>
          <Button title="retry" onPress={() => null} />
        </>
      )}

      <FlatList
        horizontal
        data={discoverApi.movies}
        keyExtractor={(movie) => movie.id.toString()}
        renderItem={({ item }) => (
          <MovieSlot
            title={item.original_title}
            rating={item.vote_average}
            imageUrl={item.poster_path}
          />
        )}
        ItemSeparatorComponent={MovieListSeparator}
        onEndReached={discoverApi.requestNextPage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default MovieList;
