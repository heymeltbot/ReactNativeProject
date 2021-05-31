import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

//props object is always first in the function
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>An App</Text>
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
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go To Counter Demo"
      />
      <Button
        onPress={() => navigation.navigate("Color")}
        title="Go To Color Demo"
      />
      <Button
        onPress={() => navigation.navigate("Modify")}
        title="Go To Color Modify Demo"
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
