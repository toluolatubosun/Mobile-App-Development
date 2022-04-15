import React from 'react';
import { View, Text } from "react-native";
import { globalStyles } from '../styles/global';

export default function Note({ route, navigation }) {
    const { title, body } = route.params

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>{title}</Text>
            <Text>{body}</Text>
        </View>
    )
}