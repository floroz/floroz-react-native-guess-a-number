import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../constants/colors";
import fonts from "../constants/fonts";

const MainButton = ({ children, onPress, buttonProps = {} }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} {...buttonProps}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontFamily: fonts.openSans,
    fontSize: 18,
    textTransform: "uppercase",
  },
});
