import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";

import Card from "./Card";
import Color from "./Color";
import Input from "./Input";
import Number from "./Number";

const InputScreen = (props) => {
  const [text, setInputText] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [number, setNumber] = useState();

  const InputHandler = (inputText) => {
    setInputText(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setInputText("");
    setConfirmed(false);
  };

  const setConfirmHandler = () => {
    const choosenNumber = parseInt(text);
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    setConfirmed(true);
    setInputText("");
    setNumber(choosenNumber);
    Keyboard.dismiss();
  };

  let confirmedResult;

  if (confirmed) {
    confirmedResult = (
      <Card style={styles.summaryContainer}>
        <Text>You Selected</Text>
        <Number>{number}</Number>
        <View style={{ ...styles.btn, width: 100 }}>
          <Button
            title="Start Game"
            color={Color.primary}
            onPress={() => props.OnStartGame(number)}
          />
        </View>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.Screen}>
        <Text style={styles.title}>Start A New Game</Text>
        <Card style={styles.InputScreen}>
          <Text>Select A Number</Text>
          <Input
            keyboardType="numeric"
            maxLength={2}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.InputText}
            onChangeText={InputHandler}
            value={text}
          />
          <View style={styles.FlexDiv}>
            <View style={styles.btn}>
              <Button
                onPress={setConfirmHandler}
                title="Confirm"
                color={Color.primary}
              />
            </View>
            <View style={styles.btn}>
              <Button
                onPress={resetInputHandler}
                title="Reset"
                color={Color.accent}
              />
            </View>
          </View>
        </Card>
        {confirmedResult}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  InputScreen: {
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  FlexDiv: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    width: "100%",
  },
  btn: {
    width: 90,
  },
  InputText: { width: 50, textAlign: "center" },
  summaryContainer: {
    backgroundColor: "white",
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "white",
    width: "60%",
  },
});

export default InputScreen;
