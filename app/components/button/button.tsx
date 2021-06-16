import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

function NormalButton(props:any) {
    const {
        title,
        titleStyle,
        containerStyle,
        buttonStyle,
        onPress,
        childeren
    } = props
    return (
        <View style={containerStyle}>
            <TouchableOpacity style={buttonStyle} onPress={onPress}>
                <Text style={titleStyle}>
                    {title}
                </Text>
                {childeren}
            </TouchableOpacity>

        </View>
    )
}

export default NormalButton
