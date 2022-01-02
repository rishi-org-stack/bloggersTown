import React from 'react'
import { Text, TouchableContainer } from '../../../../lib';
import R from '../../../../res';
import {Pressable} from 'react-native';
interface Props {
    
}

const Category = (props: Props) => {
    return (
        <Pressable onPress={()=>console.log("ok")}>
            <R.svgs.P2/>
            <Text bold color={R.colors.background} medium style={{bottom:50, left:30}}>
                Technology
            </Text>
        </Pressable>
    )
}

export default Category;
