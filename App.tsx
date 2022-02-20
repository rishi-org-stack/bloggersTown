import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainRoute from './src/screens/main';
import { KeyboardAvoidingView, Platform } from 'react-native';
import Edit from './src/screens/main/blog/edit';
import MainNav from './src/screens/main';

interface Props {
  
}

const App = (props: Props) => {
  
  return (
    // <NavigationContainer >
      <KeyboardAvoidingView style={{flex:1}} >
       {/* <MainRoute/> */}
      {/* <Edit/> */}
      <MainNav/>

      <></>
     </KeyboardAvoidingView>
  //  </NavigationContainer>
    // <Home/>
  )
}

export default App;


