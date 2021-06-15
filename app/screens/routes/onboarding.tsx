import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StackFrame } from 'react-native/Libraries/Core/Devtools/parseErrorStack';
import Onboarding from '../../components/onboarding';
const Stack = createStackNavigator()
function OnrRoutes( props :any) {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name = {"Onboarding"}
            component={Onboarding}
            />
        </Stack.Navigator>
    )
}

export default OnrRoutes
