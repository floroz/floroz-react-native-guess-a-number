import React from "react";
import { StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./components/GameOverScreen";
import Fonts from "./constants/fonts";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [userNum, setUserNum] = React.useState(null);
  const [attempts, setAttempts] = React.useState(0);
  const [isMounted, setIsMounted] = React.useState(false);

  if (!isMounted) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setIsMounted(true)}
        onError={(err) => console.error(err)}
      />
    );
  }

  const startGameHandler = (selectedNumber) => {
    setUserNum(selectedNumber);
  };

  const quitGameHandler = () => {
    setUserNum(null);
  };

  const gameOverHandler = (numOfRounds) => {
    setAttempts(numOfRounds);
  };

  const onPlayAgain = () => {
    setAttempts(0);
    setUserNum(null);
  };

  let content = <StartGameScreen startGameHandler={startGameHandler} />;

  if (userNum && attempts <= 0) {
    content = (
      <GameScreen
        userChoice={userNum}
        quitGameHandler={quitGameHandler}
        onGameOver={gameOverHandler}
      />
    );
  } else if (attempts > 0) {
    content = (
      <GameOverScreen
        attempts={attempts}
        onPlayAgain={onPlayAgain}
        userNumber={userNum}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    fontFamily: Fonts.openSans,
  },
});
