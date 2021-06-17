import React from "react";
import BrowseScreen from "./app/screens/BrowseScreen";
import DetailsScreen from "./app/screens/DetailsScreen";
import { WebView } from "react-native-webview";

export default function App() {
   return <DetailsScreen />;
  // return (
  //   <WebView source={{ uri: "https://expo.io" }} style={{ marginTop: 20 }} />
  // );
}
