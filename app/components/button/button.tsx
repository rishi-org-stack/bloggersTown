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
        
            <TouchableOpacity style={buttonStyle} onPress={onPress}>
                <View style={containerStyle}>
                <Text style={titleStyle}>
                    {title}
                </Text>
                {childeren}
                </View>

            </TouchableOpacity>

    )
}

export default NormalButton
