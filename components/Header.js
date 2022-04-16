import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ title, navigation }) {

	const openMenu = () => {
		navigation.openDrawer();
	}

	return (
		<View style={styles.header}>
			<View style={styles.header}>
				<MaterialIcons name='menu' size={28} onPress={openMenu} />
				<View style={styles.headerTitle}>
					<Image style={styles.headerImage} source={require('../assets/logo.ico')}/>
					<Text style={styles.headerText}>{title}</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerText: {
		fontWeight: 'bold',
		fontSize: 20,
		color: '#333',
		letterSpacing: 1,
		fontFamily: 'poppins-bold',
		textAlign: 'center'
	},
	headerImage: {
		width: 26,
		height: 26,
		marginHorizontal: 8
	},
	headerTitle: {
        width: '100rem',
        flex: 1,
		flexDirection: 'row',
        alignItems: 'center',
		justifyContent: 'center'
	}
});