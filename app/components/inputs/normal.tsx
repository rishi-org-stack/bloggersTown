import React from 'react'
import { View,TextInput,Text } from 'react-native'

function NormalInput(props:any) {
    const verify = props.verify
    const message = props.errorMessage
    const containerStyle = props.containerStyle
    const textStyle =props.textStyle
    const errorStyle = props.errorStyle
    const placeholderText = props.placeholderText
    const placeholderStyle = props.placeholderStyle
    const inputStyle = props.inputStyle
    const type = props.type
    const onChangeText =props.onChangeText
    const head =props.head
    const headStyle =props.headStyle
    return (
        <View
        style ={containerStyle}
        >
            <Text style={headStyle}>
                {head}
            </Text>
            <TextInput
            textAlign="left"
            placeholder ={placeholderText}
            placeholderTextColor={placeholderStyle}
            style={[inputStyle,]}
            keyboardType={type}
            onChangeText={onChangeText}
            
            />
            {
                verify?
                <View style={{
                    width:"100%",
                    alignItems:'baseline',
                    
                }}>
                    <Text
                    style={{
                        textAlign:"left",
                        ...errorStyle
                    }}
                    >
                        {message}
                    </Text>
                </View>
                :null
            }
        </View>
    )
}

export default NormalInput
