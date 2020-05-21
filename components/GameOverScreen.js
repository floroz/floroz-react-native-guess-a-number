import React from "react";
import { StyleSheet, Text, Button, Image, View } from "react-native";
import Card from "./Card";

const GameOverScreen = (props) => {
  return (
    <Card style={styles.screen}>
      <Text>The Game is Over</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/original.png")}
          style={styles.image}
        />
      </View>
      <Text>The user number was {props.userNumber}</Text>
      <Text>Computer has guessed in {props.attempts} attemps</Text>
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
});
