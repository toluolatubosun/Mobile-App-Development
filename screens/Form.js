import React from "react";
import { View, Text, Pressable } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import { TextInput } from "react-native-gesture-handler";

export default function Form({ HandleSubmit, Schema }) {

    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '' }}
                validationSchema={Schema}
                onSubmit={(values, actions) => {
                    actions.resetForm();

                    HandleSubmit(values);
                }}
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Title"
                            onChangeText={props.handleChange("title")}
                            value={props.values.title}
                        />
                        <Text style={globalStyles.errorText}>{ props.touched.title && props.errors.title }</Text>

                        <TextInput
                            multiline
                            style={globalStyles.input}
                            placeholder="Body"
                            onChangeText={props.handleChange("body")}
                            value={props.values.body}
                        />
                        <Text style={globalStyles.errorText}>{ props.touched.title && props.errors.body }</Text>

                        <Pressable style={globalStyles.button} onPress={props.handleSubmit}>
                            <Text style={globalStyles.buttonText}>Submit</Text>
                        </Pressable>
                    </View>
                )}
            </Formik>
        </View>
    )
}