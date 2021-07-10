import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View>
      <Text style={styles.titleStyle}>I Do Nothing: An App</Text>
      <View style={styles.viewStyle} />
      <View style={styles.redBox} />
      <View style={styles.purpleBox} />
      <View style={styles.greenBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    borderWidth: 2,
    borderColor: "black",
    textAlign: "center",
    textAlignVertical: "center",
    height: 50,
    fontSize: 20,
    fontWeight: "bold",
  },
  viewStyle: {
    borderWidth: 1,
    height: 150,
    borderColor: "white",
  },

  redBox: {
    borderWidth: 3,
    borderColor: "magenta",
    backgroundColor: "pink",
    alignSelf: "flex-start",
    position: "absolute",
    width: 100,
    height: 100,
    top: 50,
  },
  purpleBox: {
    borderWidth: 3,
    borderColor: "purple",
    backgroundColor: "violet",
    height: 100,
    width: 100,
    position: "absolute",
    alignSelf: "flex-end",
    top: 50,
  },
  greenBox: {
    borderWidth: 3,
    borderColor: "teal",
    backgroundColor: "#77dd77",
    height: 100,
    width: 100,
    position: "absolute",
    top: 150,
    alignSelf: "center",
  },
});
