import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    //self closing because don't expect to pass anything into it
    //when creating a component, can choose any prop name that we want (title)
    <View>
      <ImageDetail
        title="Forest"
        imageScore={12}
        showImage={require("../../assets/forest.jpg")}
      />
      <ImageDetail
        title="Beach"
        imageScore={100}
        showImage={require("../../assets/beach.jpg")}
      />
      <ImageDetail
        title="Mountain"
        imageScore="79Thousand3"
        showImage={require("../../assets/mountain.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
