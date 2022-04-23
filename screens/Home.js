import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { globalStyles } from '../styles/global';
import Card from '../components/Card'
import { MaterialIcons } from '@expo/vector-icons';

export default function Home({ navigation }) {

    const [modalVisible, setModalVisible] = React.useState(false);

    const [notes, setNotes] = React.useState([
        { title: 'Hello World', key: 1, body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit loremque quidem quasi?'},
        { title: 'Hello Metaverse', key: 2, body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit loremque quidem quasi?'},
        { title: 'The Sky is Blue', key: 3, body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit loremque quidem quasi?'}
    ])

    return (
        <View style={globalStyles.container}>
            
            <Modal visible={modalVisible} animationType="slide">
                <View style={styles.modalContent}>
                    <MaterialIcons
                        name='close'
                        size={24}
                        onPress={() => setModalVisible(false)}
                        style={[styles.modalToggle, styles.modalClose]} 
                    />
                    <Text>Hello</Text>
                </View>
            </Modal>

            <MaterialIcons
                name='add'
                size={24}
                onPress={() => setModalVisible(true)}
                style={styles.modalToggle}
            />
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

const styles = StyleSheet.create({
    modalToggle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#f2f2f2',
      padding: 10,
      borderRadius: 10,
      alignSelf: 'center',
    },
    modalClose: {
      marginTop: 20,
      marginBottom: 0,
    },
    modalContent: {
      flex: 1,
    }
  })