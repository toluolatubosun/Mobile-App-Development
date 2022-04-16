import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../components/Header';

import Home from "../screens/Home"
import Note from "../screens/Note"

const Stack = createNativeStackNavigator();

export default function HomeStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={Home} 
                options={
                    ({ navigation }) => {
                        return { 
                            headerTitle: () => <Header title="Notes" navigation={navigation}/>,
                        }
                    }                        
                }
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