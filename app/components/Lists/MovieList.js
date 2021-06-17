import React, { useState, useRef } from "react";

import { View, StyleSheet, FlatList, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";

import Button from "../Button";
import { genres, sortings } from "../../api/discoverOptions";
import MovieListSeparator from "./MovieListSeparator";
import MovieSlot from "./MovieSlot";
import useDiscoverApi from "../../hooks/useDiscoverApi";
import routes from "../../navigation/routes";

function MovieList({ initialSorting, initialGenre = null }) {
  const [currentSorting, setCurrentSorting] = useState(initialSorting);
  const [currentGenreId, setCurrentGenreId] = useState(initialGenre);

  const navigation = useNavigation();

  const discoverApi = useDiscoverApi(currentSorting, currentGenreId);

  const flatListRef = useRef();
  const scrollBack = () => {
    flatListRef.current.scrollToOffset({
      animated: false,
      offset: 0,
    });
  };

  return (
    <View style={styles.container}>
      {discoverApi.error && (
        <>
          <Text>Oops! Could not get data from server.</Text>
          <Button title="retry" onPress={() => discoverApi.requestNextPage()} />
        </>
      )}

      <View style={styles.pickerContainer}>
        <Picker //Sorting
          style={styles.picker}
          selectedValue={currentSorting}
          onValueChange={(itemValue) => {
            setCurrentSorting(itemValue);
            scrollBack();
          }}
        >
          {sortings.map((sorting) => (
            <Picker.Item
              key={sorting.name}
              label={sorting.name}
              value={sorting.value}
            />
          ))}
        </Picker>

        <Picker //Genre
          style={styles.picker}
          selectedValue={currentGenreId}
          onValueChange={(itemValue) => {
            setCurrentGenreId(itemValue);
            scrollBack();
          }}
        >
          <Picker.Item label="All genres" value={null} />
          {genres.map((genre) => (
            <Picker.Item key={genre.name} label={genre.name} value={genre.id} />
          ))}
        </Picker>
      </View>

      <FlatList
        ref={flatListRef}
        horizontal
        data={discoverApi.movies}
        keyExtractor={(movie) => movie.id.toString()}
        renderItem={({ item }) => (
          <MovieSlot
            title={item.original_title}
            rating={item.vote_average * 10}
            imageUrl={item.poster_path}
            onPress={() => {
              navigation.push(routes.DETAILS, { id: item.id });
            }}
          />
        )}
        ItemSeparatorComponent={MovieListSeparator}
        onEndReached={discoverApi.requestNextPage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { height: 300, width: "100%", marginBottom: 10 },
  picker: { width: "50%" },
  pickerContainer: { flexDirection: "row" },
});

export default MovieList;
