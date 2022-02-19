import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Color from "./Color";

const Header = () => {
  return (
    <View style={styles.Header}>
      <Text style={styles.Heading}>Guess Number</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    backgroundColor: Color.primary,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  Heading: {
    color: "black",
    fontSize: 20,
    padding: 30,
  },
});

export default Header;
