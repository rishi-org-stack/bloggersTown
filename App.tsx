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
import Boarding from "react-native-onboarding-swiper"
import Onboarding from './app/components/onboarding';

const Next = ({ ...props }) => {
  return (
    <TouchableOpacity
      {...props}
    >
      <View 
      style={{
        height: 60,
        width: 80,
        backgroundColor: "#376AED",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginRight: 20,
        ...shadow.shadow
      }}>
        <Image
          source={
            require("./app/assets/right.png")

          }
        />
      </View>
    </TouchableOpacity>

  )
}
const Dot = (props: any) => {
  let selected = props.selected
  return (
    <View style={{
      backgroundColor: '#376AED',
      height: 6,
      borderRadius: 6,
      width: selected ? 15 : 6,
      margin: 5
    }} />
  )
}
const HeadImage = () => {
  return (
    <View style={{
      display: 'flex',
      // flex:1,
      // alignSelf:"",
      flexDirection: 'column'
    }}>
      <View style={{
        // flex:1,
        flexDirection: 'row'
      }}>
        <Image
          source={
            require("./app/assets/life.png")
          }
        />
        <View
          style={{
          }}
        >
          <Image
            source={
              require("./app/assets/vr.png")
            }
            style={{
              borderRadius: 20,
              marginLeft: 20,
              // shadowColor: "green",
              // shadowRadius: 10,
              // shadowOpacity: 0.1,
              // // ShadowOffset: {
              // //   width: 0,
              // //   height: 10
              // // }
              // shadowOffset:{
              //   width:0,
              //   height:10
              // },
              ...shadow.shadow

            }}
          />
        </View>

      </View>
      <View style={{
        // flex:1,
        marginTop: 20,
        flexDirection: 'row'
      }}>
        <Image
          source={
            require("./app/assets/Photo.png")
          }
          style={{
            borderRadius: 20,
            // marginLeft:20

          }}
        />
        <Image
          source={
            require("./app/assets/scenery.png")
          }
          style={{
            borderRadius: 20,
            marginLeft: 20

          }}
        />
      </View>
    </View>
  )
}

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
     <Onboarding/>
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
