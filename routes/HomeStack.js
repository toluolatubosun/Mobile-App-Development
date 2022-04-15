import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../screens/Home"
import Note from "../screens/Note"

const Stack = createNativeStackNavigator();

export default function HomeStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{ 
                    title: 'Notes App', 
                    headerStyle: { 
                        backgroundColor: "#ccc"
                    } 
                }}
            />
            <Stack.Screen 
                name="Note"
                component={Note} 
                options={({ route }) => ({ 
                    title: route.params.title 
                })}
            />
        </Stack.Navigator>
    )
}