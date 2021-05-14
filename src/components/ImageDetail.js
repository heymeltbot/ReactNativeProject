import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

//refer to props you're using exclusively within curlies. Remove props. from the sources
const ImageDetail = ({ showImage, title, imageScore }) => {
  return (
    <View>
      <Image source={showImage} />
      <Text>{title}</Text>
      <Text>Image Score - {imageScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
