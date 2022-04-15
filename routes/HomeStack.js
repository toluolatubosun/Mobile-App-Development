import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../screens/Home"
import Note from "../screens/Note"

const Stack = createNativeStackNavigator();

export default function HomeStack(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home" component={Home} 
                    options={{ 
                        title: 'Notes App', 
                        headerStyle: { 
                            backgroundColor: "#ccc"
                        } 
                    }}
                />
                <Stack.Screen 
                    name="Note" c
                    component={Note} 
                    options={({ route }) => ({ 
                        title: route.params.title 
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}