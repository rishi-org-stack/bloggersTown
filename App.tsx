/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect} from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import analytics from '@react-native-firebase/analytics';



const App = () => {
  useEffect(() => {
    async function ok(){
      await analytics().logEvent('basket', {
        id: 3745092,
        item: 'mens grey t-shirt',
        description: ['round neck', 'long sleeved'],
        size: 'L',
      })
    }
    ok()
    // return "ok"
  }, [])


  return (
    <SafeAreaView >

    </SafeAreaView>
  );
};

export default App;
