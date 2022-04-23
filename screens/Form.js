import React from "react";
import { View, Text, FlatList, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import { TextInput } from "react-native-gesture-handler";
import { Button } from "react-native-web";

export default function Form({ HandleSubmit }){

    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '' }}
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
                        <TextInput
                            multiline
                            style={globalStyles.input}
                            placeholder="Body"
                            onChangeText={props.handleChange("body")}
                            value={props.values.body}
                        />
                        <Button
                            color="#333"
                            title="Submit"
                            onPress={props.handleSubmit}
                        />
                    </View>
                )}
            </Formik>
        </View>
    )
}