import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Color from "./Color";

const Number = (props) => {
  return (
    <View style={styles.NumberContainer}>
      <Text style={styles.Number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  NumberContainer: {
    borderWidth: 2,
    borderColor: Color.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  Number: { color: Color.accent, fontSize: 22 },
});

export default Number;
