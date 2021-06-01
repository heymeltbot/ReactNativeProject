import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

// const CounterScreen = () => {
//   //array destructuring

//   const [counter, setCounter] = useState(0);
//   return (
//     <View>
//       <Button
//         title="Increase"
//         onPress={() => {
//           //don't do this - can't modify a state variable directly
//           //counter++;
//           setCounter(counter + 1);
//         }}
//       />
//       <Button
//         title="Decrease"
//         onPress={() => {
//           setCounter(counter - 1);
//         }}
//       />
//       <Text>Current Count: {counter}</Text>
//     </View>
//   );
// };

//refactor above to useReducer

const reducer = (state, action) => {
  // state === {counter: number}
  //action === {type: 'increase' || 'decrease', payload: 1}

  switch (action.type) {
    case "increase":
      return { ...state, counter: state.counter + action.payload };
    case "decrease":
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  //remove all references to state

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "increase", payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "decrease", payload: 1 });
        }}
      />
      <Text>Current Count: {state.counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
