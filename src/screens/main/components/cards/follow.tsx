import React from 'react'
import { SvgProps } from 'react-native-svg';
import { TouchableContainer, Text } from '../../../../lib';

interface Props {
    onPress?:()=>void;
    img?: React.FC<SvgProps>
}

const Follow = (props: Props) => {
    return (
        <TouchableContainer
            height={60}
            width={50}
            borderRadius={10}
            Onpress={props.onPress}
        >
            {props.img}
            {/* <Text verySmall style={{alignSelf:'center'}}>
                okkkkk
            </Text> */}
        </TouchableContainer>
    )
}

export default Follow;
