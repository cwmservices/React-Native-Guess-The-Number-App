import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

import Card from "./Card";
import Color from "./Color";

const GameOverScreen = (props) => {
  return (
    <Card style={styles.gameOver}>
      <Text style={styles.text}>The Game is Over!</Text>
      <Text style={styles.text}>The Number Was:{props.userNumber}</Text>
      <Text style={styles.text}>Guess Total Rounds:{props.roundsNumber}</Text>
      <View style={styles.buttonOver}>
        <Button
          title="Play Again"
          color={Color.accent}
          onPress={props.OnRestart}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  gameOver: {
    justifyContent: "center",
    backgroundColor: "white",
    alignItems: "center",
    width: "100%",
    marginTop: "50%",
  },
  buttonOver: {
    width: 100,
  },
  text: {
    textAlign: "center",
    fontSize: 15,
    marginTop: 5,
    marginBottom: 5,
  },
});

export default GameOverScreen;
