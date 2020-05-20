import React from "react";
import { StyleSheet, Text, Button } from "react-native";
import Card from "./Card";

const GameOverScreen = (props) => {
  return (
    <Card style={styles.screen}>
      <Text>The Game is Over</Text>
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
});
