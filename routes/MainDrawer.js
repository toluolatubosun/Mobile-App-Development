import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './HomeStack';
import AbooutStack from './AboutStack';

const Drawer = createDrawerNavigator();

export default function MainDrawer(){
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="HomeStack"
                screenOptions={{
                    headerShown: false,
                    drawerLabelStyle: {
                        fontFamily: 'poppins-regular'
                    }
                }}
            >
                <Drawer.Screen name="HomeStack" component={HomeStack} />
                <Drawer.Screen name="AboutStack" component={AbooutStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}