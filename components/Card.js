import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: { elevation: 5, alignItems: "center", padding: 30, width: 300 },
});

export default Card;
