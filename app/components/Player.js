import React from "react";
import { View, StyleSheet, Modal, TouchableOpacity } from "react-native";
import { WebView } from "react-native-webview";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function Player({ visible, videoKey, onClose }) {
  if (!visible) return null;
  console.log("got key", videoKey);
  return (
    <Modal transparent>
      <View style={styles.container}>
        <TouchableOpacity onPress={onClose}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="close" style={styles.icon} />
          </View>
        </TouchableOpacity>
        <View style={styles.webViewContainer}>
          <WebView
            source={{ uri: "https://www.youtube.com/embed/" + videoKey }}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.7)",
    flex: 1,
    justifyContent: "center",
  },
  webViewContainer: {
    height: 300,
    bottom: 50,
  },
  icon: {
    color: colors.white,
    fontSize: 20,
    alignSelf: "center",
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignSelf: "flex-end",
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.black,
    borderColor: colors.gold,
    borderWidth: 2,
    bottom: 50,
  },
});

export default Player;
