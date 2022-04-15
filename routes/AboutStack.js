import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Aboout from "../screens/About"

const Stack = createNativeStackNavigator();

export default function AbooutStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="About" 
                component={Aboout} 
                options={{ 
                    title: 'About', 
                    headerStyle: { 
                        backgroundColor: "#ccc"
                    } 
                }}
            />
        </Stack.Navigator>
    )
}