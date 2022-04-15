import { useFonts } from "expo-font"
import AppLoading from 'expo-app-loading';

import Home from './screens/Home'
import HomeStack from "./routes/HomeStack";

export default function App() {
	let [fontsLoaded] = useFonts({
		'poppins-regular': require('./fonts/Poppins-Regular.ttf'),
		'poppins-bold': require('./fonts/Poppins-Bold.ttf')
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<HomeStack />
	);
}