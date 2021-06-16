import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import AuthHeader from '../../components/authHeader';
import NormalButton from '../../components/button/button';
import NormalInput from '../../components/inputs/normal';
import { colors } from '../../theme/color';
function Auth() {
    const [login, setlogin] = useState(true)
    const [signup, setsignup] = useState(false)
    const [emailClicked, setemailClicked] = useState(false)
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
                    flex: 7,
                    backgroundColor: colors.backgroundColor,
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                    alignItems: 'center'
                }}>
                    <View style={{
                        flex: 1,
                        width: "80%"
                    }}>
                        {
                            login ?
                                <View>
                                    <Text style={{
                                        fontFamily: "Avenir",
                                        fontSize: 25,
                                        color: colors.darkBlueText,
                                        fontWeight: "800"
                                    }}>
                                        Welcome back
                                    </Text>
                                    <Text style={{
                                        fontFamily: "Avenir",
                                        fontSize: 15,
                                        color: colors.darkBlueText,
                                        fontWeight: "400"
                                    }}>
                                        Sign in with your account
                                    </Text>
                                </View>
                                :
                                <View>
                                    <Text style={{
                                        fontFamily: "Avenir",
                                        fontSize: 25,
                                        color: colors.darkBlueText,
                                        fontWeight: "800"
                                    }}>
                                        Join us
                                    </Text>
                                    <Text style={{
                                        fontFamily: "Avenir",
                                        fontSize: 15,
                                        color: colors.darkBlueText,
                                        fontWeight: "400"
                                    }}>
                                        Sign up with us
                                    </Text>
                                </View>
                        }
                    </View>
                    <View style={{
                        flex: 6,
                        width: "80%"
                    }}>

                        <NormalButton
                            onPress={login ? () => setemailClicked(true) : () => {
                                console.warn("nothing");
                            }}
                            childeren={<NormalInput
                                head={"Username"}
                                headStyle={
                                    {
                                        fontFamily: "Avenir",
                                        fontSize: 15,
                                        // color:"red",
                                        color: colors.darkBlueText,
                                        fontWeight: "400"
                                    }
                                }
                                placeholderText={"user"}
                                inputStyle={{
                                    borderBottomWidth: emailClicked ? 400 : 1,
                                    borderBottomColor: "#D9DFEB",
                                    color: colors.darkBlueText,
                                    fontFamily: "Avenir",
                                    fontWeight: "400"

                                }}
                                containerStyle={{
                                    width: "100%",
                                    // backgroundColor:"red",

                                }}
                            />}
                        />
                        <NormalButton
                            onPress={login ? () => setemailClicked(true) : () => {
                                console.warn("nothing");
                            }}
                            childeren={<NormalInput
                                head={"Password"}
                                headStyle={
                                    {
                                        fontFamily: "Avenir",
                                        fontSize: 15,
                                        // color:"red",
                                        color: colors.darkBlueText,
                                        fontWeight: "400"
                                    }
                                }
                                placeholderText={"something"}
                                inputStyle={{
                                    borderBottomWidth: emailClicked ? 400 : 1,
                                    borderBottomColor: "#D9DFEB",
                                    color: colors.darkBlueText,
                                    fontFamily: "Avenir",
                                    fontWeight: "400"

                                }}
                                containerStyle={{
                                    width: "100%",
                                    // backgroundColor:"red",

                                }}
                            />}
                        />
                        <NormalButton
                            title={login ? "Login" : "Signup"}
                            containerStyle={{
                                alignItems: 'center',
                                justifyContent: "center",
                                marginTop: 30,
                                width: "100%",
                                backgroundColor: colors.blue,
                                height: 60,
                                borderRadius: 15
                            }}
                            titleStyle={{
                                fontSize: 16,
                                fontFamily: "Avenir",
                                color: colors.backgroundColor
                            }}
                        />
                        {
                            login ?
                                <View style={{
                                    flexDirection: 'row',
                                    marginTop: 10
                                }}>
                                    <Text style={{
                                        fontSize: 14,
                                        fontFamily: "Avenir",
                                        marginRight: 10

                                    }}>
                                        {"Forget your password\t?"}
                                    </Text>
                                    <NormalButton
                                        title={"Reset here"}
                                        titleStyle={{
                                            fontSize: 14,
                                            fontFamily: "Avenir",
                                            color: colors.blue
                                        }}
                                    />
                                </View>
                                : null
                        }

                    </View>
                </View>
            </View>
        </View>
    )
}

export default Auth
