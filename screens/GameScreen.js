import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Dimensions,
} from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import MainButton from "../components/MainButton";
import { Ionicons } from "@expo/vector-icons";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }

  return rndNum;
};

const GameScreen = ({ userChoice, quitGameHandler, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = React.useState(
    generateRandomBetween(1, 100, userChoice)
  );
  const currentLow = React.useRef(1);
  const currentHigh = React.useRef(100);
  const attempts = React.useRef(0);

  React.useEffect(() => {
    if (userChoice === currentGuess) {
      onGameOver(attempts.current);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const onGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "higher" && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Retry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNum = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    attempts.current++;
    setCurrentGuess(nextNum);
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={() => onGuessHandler("lower")}>
          <Ionicons name="md-remove" size={24} />
        </MainButton>
        <MainButton onPress={() => onGuessHandler("higher")}>
          <Ionicons name="md-add" size={24} />
        </MainButton>
      </Card>
      <Button title="QUIT" onPress={quitGameHandler} />
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: Dimensions.get("window").height > 600 ? 20 : 5,
    width: 400,
    maxWidth: "90%",
  },
});
