import React from "react";
import { TouchableOpacity, StyleSheet, View, Dimensions } from "react-native";

import Text from "./Text";
import Icon from "./Icon";

function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          name={item.icon}
          backgroundColor={item.backgroundColor}
          size={80}
        />
      </TouchableOpacity>
        <Text style={styles.text}>{item.name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  text: {
    padding: 5,
    textAlign: 'center'
  },
});
export default CategoryPickerItem;
