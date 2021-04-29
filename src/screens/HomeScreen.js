import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = () => {
 return (
 <View>
    <Text style={styles.text}>YourMom</Text>
    {/* can pass string to prop w/o curlies */}
      <Button title="Go to Components Demo"
            onPress={() => console.log('Button Pressed')} />
      <TouchableOpacity onPress={() => console.log('List Pressed')}>
        
        <Text>Go To List Demo</Text>
      </TouchableOpacity>
  </View>
 );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;


