import React, { useState } from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";

import config from "../../api/config";
import colors from "../../config/colors";
import Rating from "../Rating";

function MovieSlot({ imageUrl, title, rating }) {
  const [ratingVisible, setRatingVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Pressable
        onLongPress={() => setRatingVisible(true)}
        onPressOut={() => setRatingVisible(false)}
      >
        <Image
          source={{
            uri: config.POSTER_MEDIUM + imageUrl,
            width: 154,
            height: 231,
          }}
        />
      </Pressable>

      <Rating
        style={styles.rating}
        score={rating}
        visible={ratingVisible}
      />
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
  rating: { position: "absolute", top: 20 },
});

export default MovieSlot;
