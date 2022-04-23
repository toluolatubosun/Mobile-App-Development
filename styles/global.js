import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        fontFamily: 'poppins-regular',
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
        fontFamily: 'poppins-regular',
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    summary: {
        color: '#333',
        fontFamily: 'poppins-regular',
        marginVertical: '0.4rem'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        marginBottom: 10,
    },
});