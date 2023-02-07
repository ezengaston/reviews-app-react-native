import React from "react";
import { Text, View } from "react-native";

import Card from "../shared/card";

import { globalStyles } from "../styles/global";

export default function ReviewDetails({ route }) {
  const params = route.params;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{params.title}</Text>
        <Text>{params.body}</Text>
        <Text>{params.rating}</Text>
      </Card>
    </View>
  );
}
