import React from "react";
import { StyleSheet, Text, Image, View, Dimensions } from "react-native";
import Card from "./Card";
import MainButton from "./MainButton";
import fonts from "../constants/fonts";

const GameOverScreen = (props) => {
  return (
    <Card style={styles.screen}>
      <Text style={styles.bodyText}>The Game is Over</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/original.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.bodyText}>
          The user number was{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>
        </Text>
        <Text style={styles.bodyText}>
          Computer has guessed in{" "}
          <Text style={styles.highlight}>{props.attempts} attemps</Text>
        </Text>
      </View>
      <MainButton onPress={props.onPlayAgain}>Play again</MainButton>
    </Card>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlight: {
    color: "green",
    fontFamily: fonts.openSansBold,
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
  },
  bodyText: {
    fontFamily: fonts.openSans,
    fontSize: 18,
    textAlign: "center",
  },
  textContainer: {
    marginVertical: Dimensions.get("window").height / 60,
  },
});
