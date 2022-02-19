import React, { useState, useRef, useEffect } from "react";
import { Text, Button, View, StyleSheet, Alert } from "react-native";
import Card from "./Card";
import Color from "./Color";
import Number from "./Number";

const choiceGenerator = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randNumber == exclude) {
    return choiceGenerator(min, max, exclude);
  }
  return randNumber;
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    choiceGenerator(1, 99, props.userChoice)
  );
  const [Cycle, setCycle] = useState(0);

  const currentLower = useRef(1);
  const currentGreater = useRef(100);

  const { userChoice, OnGameOver } = props;

  useEffect(() => {
    if (currentGuess == props.userChoice) {
      props.OnGameOver(Cycle);
    }
  }, [userChoice, OnGameOver, currentGuess]);

  const UserInputHandler = (input) => {
    if (
      (input == "lower" && currentGuess < props.userChoice) ||
      (input == "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie", "You know but you're cheating", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (input == "lower") {
      currentGreater.current = currentGuess;
    } else {
      currentLower.current = currentGuess;
    }
    const NewNumber = choiceGenerator(
      currentLower.current,
      currentGreater.current,
      currentGuess
    );
    setCurrentGuess(NewNumber);
    setCycle((currentCycle) => currentCycle + 1);
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <Number>{currentGuess}</Number>
      <Card style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title="Lower"
            color={Color.accent}
            onPress={UserInputHandler.bind(this, "lower")}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Greater"
            color={Color.accent}
            onPress={UserInputHandler.bind(this, "greater")}
          />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "white",
  },
  button: {
    margin: 10,
    width: 100,
  },
});

export default GameScreen;
