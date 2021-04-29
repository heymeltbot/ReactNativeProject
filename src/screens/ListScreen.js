import React from 'react';
import {view, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: 50}, //key: '1'...key must be string and unique
        { name: 'Friend #2', age: 18},
        { name: 'Friend #3', age: 3},
        { name: 'Friend #4', age: 5},
        { name: 'Friend #5', age: 100},
        { name: 'Friend #6', age: 16},
        { name: 'Friend #7', age: 4000},
        { name: 'Friend #8', age: 37},
        { name: 'Friend #9', age: 12}
    ];

    return (
    <FlatList 
    //horizontal
    //showsHorizontalScrollIndicator = {false}
    keyExtractor={friend => friend.name}
    data={friends} 
    renderItem={({item}) =>{
       // element === { item: name: 'Friend #1', index: 0} 
        return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
    }}/>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;