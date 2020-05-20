import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./components/GameOverScreen";

export default function App() {
  const [userNum, setUserNum] = React.useState(null);
  const [attempts, setAttempts] = React.useState(0);

  const startGameHandler = (selectedNumber) => {
    setUserNum(selectedNumber);
  };

  const quitGameHandler = () => {
    setUserNum(null);
  };

  const gameOverHandler = (numOfRounds) => {
    setAttempts(numOfRounds);
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
    content = <GameOverScreen attempts={attempts} />;
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
  },
});
