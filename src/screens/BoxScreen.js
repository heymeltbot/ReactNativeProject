import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.redBox} />
      <View style={styles.greenBox} />
      <View style={styles.purpleBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    height: 100,
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  redBox: {
    height: 50,
    width: 50,
    backgroundColor: "red",
  },
  purpleBox: {
    height: 50,
    width: 50,
    backgroundColor: "purple",
  },
  greenBox: {
    height: 50,
    width: 50,
    backgroundColor: "green",
    alignSelf: "flex-end",
  },
});

export default BoxScreen;
