import React from "react";
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";


function Screen({ children, style }) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}
const styles = StyleSheet.create({
  screen: { flex: 1 },
});
export default Screen;