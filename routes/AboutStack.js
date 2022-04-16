import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../components/Header';

import Aboout from "../screens/About"

const Stack = createNativeStackNavigator();

export default function AbooutStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="About" 
                component={Aboout} 
                options={
                    ({ navigation }) => {
                        return { 
                            headerTitle: () => <Header title="About" navigation={navigation}/>,
                        }
                    }   
                }
            />
        </Stack.Navigator>
    )
}