import React from "react";
import { StyleSheet, Text, Button, Image, View } from "react-native";
import Card from "./Card";
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
      <Text style={styles.bodyText}>
        The user number was{" "}
        <Text style={styles.highlight}>{props.userNumber}</Text>
      </Text>
      <Text style={styles.bodyText}>
        Computer has guessed in{" "}
        <Text style={styles.highlight}>{props.attempts} attemps</Text>
      </Text>
      <Button title="Play again" onPress={props.onPlayAgain} />
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
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    width: 300,
    height: 300,
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlight: {
    color: "green",
    fontFamily: fonts.openSansBold,
  },
  bodyText: {
    fontFamily: fonts.openSans,
    fontSize: 18,
  },
});
