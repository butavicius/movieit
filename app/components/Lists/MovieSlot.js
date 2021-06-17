import React, { useState } from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";

import imageConfig from "../../api/config";
import colors from "../../config/colors";
import Rating from "../Rating";
import Text from "../Text";

function MovieSlot({ imageUrl, title, rating }) {
  const { POSTER_BASE, POSTER_WIDTH, POSTER_HEIGHT } = imageConfig;
  const [detailsVisible, setDetailsVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Pressable
        onLongPress={() => setDetailsVisible(true)}
        onPressOut={() => setDetailsVisible(false)}
      >
        <Image
          source={{
            uri: POSTER_BASE + imageUrl,
            width: POSTER_WIDTH,
            height: POSTER_HEIGHT,
          }}
        />
      </Pressable>
      {detailsVisible && (
        <>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
            <Rating style={styles.rating} score={rating} />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 231,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: colors.gold,
    alignItems: "center",
  },
  titleContainer: {
    position: "absolute",
    padding: 5,
    width: "100%",
    backgroundColor: colors.deep,
    borderBottomColor: colors.gold,
    borderBottomWidth: 3,
    alignItems: "center",
  },
  title: { textAlign: "center", color: colors.white },
});

export default MovieSlot;
