import React from 'react'; //how different components work together
import {Text, StyleSheet, View} from 'react-native'; //takes info from components to show content on mobile device

const ComponentsScreen = () => {
    const greeting = 'Bye there'; //can't show object in text element
    const myName = 'My name is meltbot'
    

    return ( 
    <View>
        <Text style={styles.headerText}>Getting started with React Native!</Text>
        <Text style={styles.subHeaderText}>{myName}</Text>
    </View>
        );
    };

const styles = StyleSheet.create({
    headerText: {
        fontSize: 45
    },
    subHeaderText: {
        fontSize: 20
    }
});

export default ComponentsScreen;