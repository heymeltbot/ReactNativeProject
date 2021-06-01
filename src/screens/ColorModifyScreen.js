import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorAdjuster from "../components/ColorAdjuster";

// const ColorModifyScreen = () => {
//   const [red, setRed] = useState(0);
//   const [green, setGreen] = useState(0);
//   const [blue, setBlue] = useState(0);

// const setColor = (color, change) => {
//   //color === red, gree, blue
//   //change === +15, -15
//   switch (color) {
//     case "red":
//       red + change > 255 || red + change < 0 ? null : setRed(red + change);
//       return;
//     case "blue":
//       blue + change > 255 || blue + change < 0
//         ? null
//         : setBlue(blue + change);
//       return;
//     case "green":
//       green + change > 255 || green + change < 0
//         ? null
//         : setGreen(green + change);
//       return;
//     default:
//       return;
//   }
// };

{
  /* <View>
<ColorAdjuster
  onIncrease={() => setColor("red", COLOR_INCREMENT)}
  onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
  color="Red"
/>
<ColorAdjuster
  onIncrease={() => setColor("blue", COLOR_INCREMENT)}
  onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
  color="Blue"
/>
<ColorAdjuster
  onIncrease={() => setColor("green", COLOR_INCREMENT)}
  onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
  color="Green"
/> */
}

//refactor the above with a reducer
const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  // state === {red: number, green: number, blue: number};
  //action === {colorToChange: 'red' || 'green' || 'blue, amount: 15 || -15}

  switch (action.colorToChange) {
    case "red":
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount };

    case "green":
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount };

    case "blue":
      return state.blue + action.amount > 255 || state.green + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount };

    default:
      return state;
  }
};

const ColorModifyScreen = () => {
  //state = the object after reducer. Used to access state values
  //dispatch runs reducer. Don't need to call it dispatch (could call it runMyReducer for example), it's just convention
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorAdjuster
        onIncrease={() =>
          //community convention uses type and payload, rather than colortochange and amount
          //type: change_red, payload: COLOR_INCREMENT
          dispatch({ colorToChange: "red", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "red", amount: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorAdjuster
        onIncrease={() =>
          dispatch({ colorToChange: "blue", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "blue", amount: -1 * COLOR_INCREMENT })
        }
        color="Blue"
      />
      <ColorAdjuster
        onIncrease={() =>
          dispatch({ colorToChange: "green", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "green", amount: -1 * COLOR_INCREMENT })
        }
        color="Green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorModifyScreen;
