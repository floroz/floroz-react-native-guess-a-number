import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNum, setUserNum] = React.useState(null);

  const startGameHandler = (selectedNumber) => {
    setUserNum(selectedNumber);
  };

  const quitGameHandler = () => {
    setUserNum(null);
  };

  return (
    <View style={styles.screen}>
      <Header title="Guess a number" />
      {!userNum ? (
        <StartGameScreen startGameHandler={startGameHandler} />
      ) : (
        <GameScreen userChoice={userNum} quitGameHandler={quitGameHandler} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
