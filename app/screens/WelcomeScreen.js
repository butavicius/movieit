import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import LottieView from "lottie-react-native";

import Screen from "../components/Screen";
import colors from "../config/colors";
import Button from "../components/Button";
import Text from "../components/Text";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <Text style={styles.title}>MOVIE IT!</Text>
      <Text style={styles.subTitle}>for ReactSeals Academy</Text>
      <LottieView
        autoPlay
        source={require("../../assets/welcome.json")}
        style={styles.animation}
      />
      <Button
        title="Browse movies"
        onPress={() => navigation.navigate(routes.BROWSE)}
      />
      <Button title="Login" style={styles.disabled} />
      <View></View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: colors.deep,
    textShadowColor: colors.gold,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  subTitle: { fontSize: 14, color: colors.blue },
  animation: {
    height: 300,
  },
  disabled: { opacity: 0.4 },
});

export default WelcomeScreen;
