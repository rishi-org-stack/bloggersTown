import React from 'react'
import Boarding from "react-native-onboarding-swiper"

import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  Animated
  
  } from 'react-native';

const Next = ({ ...props }) => {
  return (
    <TouchableOpacity
      {...props}
      style={{
        height: 60,
        width: 80,
        backgroundColor: "#376AED",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginRight: 20,
        ...shadow.shadow
      }}
    >
      <Animated.View 
    //   accessibilityRole ={"adjustable"}
        onResponderStart ={(e)=>console.log(e)
        }
      >
        <Image
          source={
            require("../assets/right.png")

          }
        />
      </Animated.View>
    </TouchableOpacity>

  )
}
const Dot = (props: any) => {
  let selected = props.selected
  return (
    <View style={{
      backgroundColor: selected?'#376AED':"#DEE7FF",
      height: 8,
      borderRadius: 8,
      width: selected ? 20 : 8,
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
            require("../assets/life.png")
          }
        />
        <View
          style={{
          }}
        >
          <Image
            source={
              require("../assets/vr.png")
            }
            style={{
              borderRadius: 20,
              marginLeft: 20,
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
            require("../assets/Photo.png")
          }
          style={{
            borderRadius: 20,
            // marginLeft:20

          }}
        />
        <Image
          source={
            require("../assets/scenery.png")
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

function Onboarding() {
    return (
        <Boarding
        bottomBarHeight={200}
        bottomBarColor={"#FFFFFF"}
        showSkip={false}
        NextButtonComponent={Next}
        DoneButtonComponent={Next}
        DotComponent={Dot}
        pages={[
          {
            backgroundColor: "#FFFFFF",
            title: `Read the article you \n want instantly`,
            subtitle: "You can read thousands of articles on Blog \n Club, save them in the application and share \nthem with your loved ones.",
            image: <HeadImage />
          },
          {
            backgroundColor: "#FFFFFF",
            title: `Read the article you \n want instantly`,
            subtitle: "You can read thousands of articles on Blog \n Club, save them in the application and share \nthem with your loved ones.",
            image: <HeadImage />
          },
          {
            backgroundColor: "#FFFFFF",
            title: `Read the article you \n want instantly`,
            subtitle: "You can read thousands of articles on Blog \n Club, save them in the application and share \nthem with your loved ones.",
            image: <HeadImage />
          },

        ]}
        imageContainerStyles={
          {
            bottom: 100
          }
        }
        titleStyles={{
          bottom: 50,
          color:"#0D253C",
          fontFamily:"Avenir",
          fontSize:28,
          fontWeight:"800",
          // alignSelf:'flex-start'
          textAlign:'left'
        }}
        subTitleStyles={{
          bottom: 50,
          color:"#0D253C",
          fontFamily:"Avenir",
          fontSize:15,
          textAlign:'left',
          fontWeight:"800",
        }}
        
      />
    )
}
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
export default Onboarding
