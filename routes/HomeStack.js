import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../screens/Home"
import Note from "../screens/Note"

const Stack = createNativeStackNavigator();

export default function HomeStack(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Note" component={Note} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}