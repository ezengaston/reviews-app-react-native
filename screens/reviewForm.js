import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import { globalStyles } from "../styles/global";

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test("is-num-1-5", "Rating must be a number 1 - 5", (value) => {
      return parseInt(value) < 6 && parseInt(value) > 0 && !value.includes(".");
    }),
});

export default function reviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          title: "",
          body: "",
          rating: "",
        }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={{ ...globalStyles.input, ...styles.input }}
              placeholder="Review title"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
            />
            <TextInput
              multiline
              style={{ ...globalStyles.input, ...styles.input }}
              placeholder="Review body"
              onChangeText={props.handleChange("body")}
              value={props.values.body}
            />
            <TextInput
              style={{ ...globalStyles.input, ...styles.input }}
              placeholder="Rating (1-5)"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              keyboardType="numeric"
            />
            <Button
              title="SUBMIT"
              color="maroon"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
  },
});
