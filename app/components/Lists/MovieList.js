import React, { useContext, useEffect, useState, useRef } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

//import { GlobalParamsContext } from "../../contexts/GlobalParams";
import { genres, sortings } from "../../api/discoverOptions";
import useDiscoverApi from "../../hooks/useDiscoverApi";
import Button from "../Button";
import MovieListSeparator from "./MovieListSeparator";
import MovieSlot from "./MovieSlot";

function MovieList({ initialSorting }) {
  const [currentSorting, setCurrentSorting] = useState(initialSorting);
  const [currentGenre, setCurrentGenre] = useState(null);
  const discoverApi = useDiscoverApi(
    currentSorting.params,
    currentGenre?.params,
    {}
  );

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
          <Button title="retry" onPress={() => null} />
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
              key={sorting.label}
              label={sorting.label}
              value={sorting}
            />
          ))}
        </Picker>

        <Picker //Genre
          style={styles.picker}
          selectedValue={currentGenre}
          onValueChange={(itemValue) => {
            setCurrentGenre(itemValue);
            scrollBack();
          }}
        >
          <Picker.Item label="All genres" value={null} />
          {genres.map((genre) => (
            <Picker.Item key={genre.label} label={genre.label} value={genre} />
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
