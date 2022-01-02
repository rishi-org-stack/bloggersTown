import { Container, Props } from "./containers/container";

import React, { ReactElement } from 'react'
import { Text, TextInput, TouchableOpacity } from "react-native";
import R from "../../res";

interface TProps {
    OnChangeText?: (text:string)=>void;
    rightComponent?:React.ReactNode;
    LeftComponent?:React.ReactNode;
    placeholder?:string;
    value?:string;
    multiline?:boolean;
    fs?:number;
    height?:number;
    placeholderColor?:string;
    weight?:  "bold" | "normal" | "600" | "100" | "200" | "300" | "400" | "500" | "700" | "800" | "900" | undefined


}
type TouchProps = TProps & Props
function Input(p: TouchProps): ReactElement {
    return (
            <Container {...p} row  alignItems='flex-end'>
                {/* <Container center flex={0.1} height={'100%'} > */}
                    {p.LeftComponent}
                {/* </Container>  */}
                <Container flex={1}>
                    <TextInput
                     placeholder={p.placeholder} 
                     value={p.value}  
                     placeholderTextColor={R.colors.darkBlue} 
                     multiline={p.multiline}
                     onChangeText={p.OnChangeText}
                     style={{
                         color:R.colors.darkBlue,
                         fontWeight:p.weight,
                         fontSize:p.fs,
                         height:p.height,
                         textAlignVertical:'top'
                     }}
                     />
                </Container>
                {/* <Container center flex={0.1} height={'100%'} > */}
                    {p.rightComponent}
                {/* </Container>  */}
            </Container>
        
    )
}

export default Input
