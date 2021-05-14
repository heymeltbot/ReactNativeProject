import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

//props object is always first in the function
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>YourMom</Text>
      {/* can pass string to prop w/o curlies */}
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go To List Demo"
      />
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go To Image Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;