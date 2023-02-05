import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Review Details");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home screen</Text>
      <Button title="go to review dets" onPress={pressHandler} />
    </View>
  );
}
