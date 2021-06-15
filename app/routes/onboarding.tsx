import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from '../components/onboarding';
import { View } from "react-native"
import Auth from '../screens/auth/auth';
const Stack = createStackNavigator()
const defaultConfig = {
    headerShown: false
}
function OnrRoutes(props: any) {
    const firstTime = props.firstTime
    return (
        // <View>
        // {
        //     firstTime?
        <Stack.Navigator

        >
            <Stack.Screen
                name={"Onboarding"}
                component={Onboarding}
                options={defaultConfig}
            />
            <Stack.Screen
                name="Auth"
                options={defaultConfig}
                component={Auth}
            />
        </Stack.Navigator >
        // : 
        // null
        // }
        // </View>
    )
}

export default OnrRoutes
