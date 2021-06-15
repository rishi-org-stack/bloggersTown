import React from 'react'
import {View,Text} from "react-native" 
import { colors } from '../theme/color'
function AuthHeader() {
    return (
        <View style={{
            flex:1,
            width:"100%",
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <View style={{
                flexDirection: 'column',
            }}>
                <View style={{
                    backgroundColor:colors.blue,
                    borderRadius: 15,
                    width:"100%",
                }}>
                    <Text style={{
                        textAlign: 'center',
                            fontSize: 25,
                            padding:10,
                            color:colors.backgroundColor
                    }}>
                        Bloggers
                    </Text>
                </View>
                <View style={{}}>
                    <Text style={{
                        textAlign:'right',
                        fontSize: 25,
                            padding:5,
                            color:colors.blue
                    }}>
                        Town
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default AuthHeader
