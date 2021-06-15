import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import AuthHeader from '../../components/authHeader';
import { colors } from '../../theme/color';
function Auth() {
    const [login, setlogin] = useState(true)
    const [signup, setsignup] = useState(false)
    return (
        <View style={{
            flex: 1
        }}>
            <View style={{ flex: 1 }}>
                <AuthHeader />

            </View>
            <View style={{
                flex: 3,
                backgroundColor: colors.blue,
                borderTopRightRadius: 30,
                borderTopLeftRadius: 30
            }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <TouchableOpacity style={{}}
                            onPress={() => {
                                setlogin(true);
                                setsignup(false);
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: "Avenir",
                                    fontSize: 18,
                                    opacity: login ? 1 : 0.25,
                                    color: colors.backgroundColor,
                                    fontWeight: "800"
                                }}
                            >
                                LOGIN
                            </Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <TouchableOpacity style={{}}
                            onPress={() => {
                                setlogin(false);
                                setsignup(true);
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: "Avenir",
                                    opacity: signup ? 1 : 0.25,
                                    fontSize: 18,
                                    color: colors.backgroundColor,
                                    fontWeight: "800"
                                }}
                            >
                                SIGN UP
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    flex: 5,
                    backgroundColor: colors.backgroundColor,
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30
                }}>

                </View>
            </View>
        </View>
    )
}

export default Auth
