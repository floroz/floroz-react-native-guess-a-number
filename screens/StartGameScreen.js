import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import MainButton from "../components/MainButton";
import Colors from "../constants/colors";
import Fonts from "../constants/fonts";
import defaultStyles from "../constants/default-styles";

const StartGameScreen = ({ startGameHandler }) => {
  const [guess, setGuess] = React.useState("");
  const [confirmed, setConfirmed] = React.useState(false);
  const [selectedNumber, setSelectedNumber] = React.useState();
  const [buttonWidth, setButtonWidth] = React.useState(
    Dimensions.get("window").width / 4
  );

  React.useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get("window").width / 4);
    };
    Dimensions.addEventListener("change", updateLayout);

    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

  const guessInputHandler = (guessEntered) => {
    setGuess(guessEntered.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setGuess("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNum = parseInt(guess);
    if (isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99) {
      Alert.alert("Invalid Number", "Guess is not a valid number", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    setConfirmed(true);
    setGuess("");
    setSelectedNumber(chosenNum);
    Keyboard.dismiss();
  };

  let confirmedOuput;

  if (confirmed) {
    confirmedOuput = (
      <Card style={styles.summaryContainer}>
        <Text>Chosen Number: {selectedNumber}</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton onPress={() => startGameHandler(selectedNumber)}>
          Start Game
        </MainButton>
      </Card>
    );
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game</Text>
            <Card style={styles.inputContainer}>
              <Text>Select a Number</Text>
              <Input
                value={guess}
                onChangeText={guessInputHandler}
                style={styles.input}
                blurOnSubmit
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="number-pad"
                maxLength={2}
              />
              <View style={styles.buttonContainer}>
                <View style={{ width: buttonWidth }}>
                  <Button
                    title="Reset"
                    onPress={resetInputHandler}
                    color={Colors.accent}
                  />
                </View>
                <View style={{ width: buttonWidth }}>
                  <Button
                    title="Confirm"
                    onPress={confirmInputHandler}
                    color={Colors.primary}
                  />
                </View>
              </View>
            </Card>
            {confirmedOuput}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: Fonts.openSansBold,
  },
  inputContainer: {
    ...defaultStyles.bodyText,
    minWidth: 300,
    width: "80%",
    maxWidth: "95%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  input: {
    width: 50,
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  selectNum: {},
});

export default StartGameScreen;
