import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import Card from "../shared/card";

import { globalStyles, images } from "../styles/global";

export default function ReviewDetails({ route }) {
  const params = route.params;
  const rating = params.rating;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{params.title}</Text>
        <Text>{params.body}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
