import React from 'react';
import { View, Text } from "react-native";
import { globalStyles } from '../styles/global';

export default function Note() {
    return (
        <View style={globalStyles.container}>
            <Text>Note Page</Text>
        </View>
    )
}