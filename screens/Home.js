import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from '../styles/global';
import Card from '../components/Card'

export default function Home({ navigation }) {
    const [notes, setNotes] = React.useState([
        { title: 'Hello World', key: 1, body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit loremque quidem quasi?'},
        { title: 'Hello Metaverse', key: 2, body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit loremque quidem quasi?'},
        { title: 'The Sky is Blue', key: 3, body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit loremque quidem quasi?'}
    ])

    return (
        <View style={globalStyles.container}>
            <FlatList 
                data={notes}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate("Note", item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                            <Text 
                                style={globalStyles.summary}
                                numberOfLines={1}
                                ellipsizeMode="tail"
                            >
                                {item.body}
                            </Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}