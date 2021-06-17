import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import colors from "../config/colors";

function Screen({ children, style }) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.white },
});
export default Screen;
