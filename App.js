import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/Header";

import InputScreen from "./components/InputScreen";
import GameScreen from "./components/GameScreen";
import GameOverScreen from "./components/GameOverScreen";

export default function App() {
  const [selectedNo, setSelectedNo] = useState();
  const [guessTake, setGuessTake] = useState(0);

  const StartGameMethod = (userGuess) => {
    setSelectedNo(userGuess);
    setGuessTake(0);
  };

  const RestartGameHandler = () => {
    setGuessTake(0);
    setSelectedNo(null);
  };

  const GameOverHandler = (numOfRounds) => {
    setGuessTake(numOfRounds);
  };

  let content = <InputScreen OnStartGame={StartGameMethod} />;

  if (selectedNo && guessTake <= 0) {
    content = (
      <GameScreen userChoice={selectedNo} OnGameOver={GameOverHandler} />
    );
  } else if (guessTake > 0) {
    content = (
      <GameOverScreen
        userNumber={selectedNo}
        roundsNumber={guessTake}
        OnRestart={RestartGameHandler}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
