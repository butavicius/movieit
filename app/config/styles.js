import { Platform } from "react-native";
import colors from "../config/colors";

export default {
  colors,
  text: {
    fontSize: 16,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.black,
  },
};
