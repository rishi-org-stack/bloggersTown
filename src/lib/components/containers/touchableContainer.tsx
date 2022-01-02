import { Container, Props } from "./container";

import React, { ReactElement } from 'react'
import { Text, TouchableOpacity } from "react-native";

interface TProps {
    Onpress?: ()=>void;
    centerMain?:boolean
    rightComponent?:React.ReactNode;
    LeftComponent?:React.ReactNode;
    children?:React.ReactNode | string;

}
//TODO: fix this component
type TouchProps = TProps & Props
function TouchableContainer(p: TouchProps): ReactElement {
   
    return(
        <TouchableOpacity style={[{
            height:p.height,
            width:p.width,
            flex:p.flex,
            margin:p.margin,
            marginBottom: p.marginB,
            marginLeft: p.marginL,
            marginTop: p.marginT,
            marginRight: p.marginR,
            borderWidth:p.borderW,
            borderColor:p.borderC,
            borderRadius:p.borderRadius,
            backgroundColor:p.backgoundColor,
            flexDirection:'row',
            
        },p.style]}
        onPress={p.Onpress}
        >
            {
                p.LeftComponent !== undefined &&
                // <Container flex={1} center>
                   p.LeftComponent
                // </Container>
            }
            <Container flex={2} center={p.centerMain}>
            {
                typeof p.children ===  'string'?
                <Text style={{
                    fontWeight:'bold',
                    marginLeft:10
                }}>
                    {p.children}
                </Text>
                :
                    p.children
            }
            </Container>
            {
                p.rightComponent !== undefined &&
                <Container flex={1} center marginT={10} marginB={10}>
                    {
                        p.rightComponent
                    }
                </Container>
            }
        </TouchableOpacity>
    )
}

export default TouchableContainer
