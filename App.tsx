/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';

import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,


} from 'react-native';
import Splash from './app/screens/splash/splash';
import { NavigationContainer } from '@react-navigation/native';
import OnrRoutes from './app/routes/onboarding';

const App = () => {
  const [Loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000 * 5)
  })

  return (
    <SafeAreaView style={{
      flex: 1
    }}>
     <NavigationContainer>
      <OnrRoutes
      firstTime={true}
      />
     </NavigationContainer>
    </SafeAreaView>
  );
};
const shadow = StyleSheet.create({
  shadow: {
    shadowColor: "green",
    shadowRadius: 10,
    shadowOpacity: 0.9,
    shadowOffset: {
      width: 90,
      height: 10
    },
    elevation:10
  }
})
export default App;
