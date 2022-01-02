import { useState } from '@hookstate/core';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import userState from '../store/main';
import Auth from './auth/auth';
import MainRoute from './main/index';

interface Props {
    
}

const Stack = createStackNavigator();

const MainNav = (props: Props) => {
    const us=  useState(userState)

    React.useEffect(()=>{},[us])
    return (
        <NavigationContainer>

                    <Stack.Navigator  screenOptions={{
                        headerShown:false
                    }}>
                    <Stack.Screen name="Auth" component={Auth} />
                    <Stack.Screen name="MainRoute" component={MainRoute} />

            </Stack.Navigator>

            
        </NavigationContainer>
        
    )
}

export default MainNav;