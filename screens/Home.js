import React from 'react';
import { View, Text, Button } from "react-native";
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Page</Text>
            <Button onPress={() => navigation.navigate("Note")} title="Go to notes"/>
            {/* We also have push and pop */}
        </View>
    )
}