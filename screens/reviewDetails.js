import React from "react";
import { Text, View } from "react-native";

import { globalStyles } from "../styles/global";

export default function ReviewDetails({ route }) {
  const params = route.params;

  return (
    <View style={globalStyles.container}>
      <Text>{params.title}</Text>
      <Text>{params.body}</Text>
      <Text>{params.rating}</Text>
    </View>
  );
}
