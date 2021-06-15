import React from 'react'
import { View, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

function Splash() {
    return (
        <LinearGradient colors={["#FFFFFF", "#F4F7FF"]} style={{
            flex: 1
        }}>
            <View style={[
                {
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }
            ]}>
                <View >
                    <View style={{
                        backgroundColor: "#376AED",
                        borderRadius: 10
                    }}>
                        <Text style={{
                            padding: 5,
                            fontSize: 25,
                            color: "#FFFFFF"
                        }}>
                            Bloggers
                        </Text>
                    </View>
                    <View>
                        <Text style={{
                            fontSize: 25,
                            color:"#376AED",
                        }}>
                            Town
                        </Text>
                    </View>
                   
                </View>


            </View>
        </LinearGradient>

    )
}

export default Splash
