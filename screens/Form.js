import React from "react";
import { View, Text, FlatList, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import { TextInput } from "react-native-gesture-handler";

export default function Form(){

    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '' }}
                onSubmit={(values, actions) => {

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
                    </View>
                )}
            </Formik>
        </View>
    )
}