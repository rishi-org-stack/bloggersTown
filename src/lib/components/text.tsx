import React from 'react';
import { StyleProp, Text as RnText, TextStyle } from 'react-native';
import R from '../../res';
// import colors from '../app/color/color';

interface Props {
    children?: React.ReactChildren[]|string[]| string;
    color?: string;
    large?: boolean;
    megaLarge?: boolean;
    medium?: boolean;
    small?: boolean;
    verySmall?: boolean;
    bold?: boolean;
    weight?:  "bold" | "normal" | "600" | "100" | "200" | "300" | "400" | "500" | "700" | "800" | "900" | undefined
    normal?: boolean;
    marginT?:number;
    margin?:number;
    marginL?:number;
    marginR?:number;
    marginB?:number;
    borderBW?:number;
    borderW?:number;
    borderC?: string;
    family?:string;
    lines?:number;
    style?:StyleProp<TextStyle>
}
function Text(props: Props) {
    return (
        <RnText style={[{
            fontSize: props.large && large || props.megaLarge && MegaLarge ||props.medium && medium || props.verySmall && VerySmall || small,
            color: props.color ==  undefined?R.colors.darkBlue:props.color,
            // textAlign: 'center',
            fontWeight: props.weight,
            marginTop:props.marginT,
            marginBottom:props.marginB,
            marginLeft:props.marginL,
            marginRight:props.marginR,
            margin:props.margin,
            borderWidth:props.borderW,
            borderBottomWidth:props.borderBW,
            borderColor:props.borderC,
            fontFamily:props.family
            
        },props.style]}
        numberOfLines={props.lines}
        >
            {props.children}
        </RnText>
    )
}

const large = 24;
const MegaLarge = 30;
const medium = 16;
const small = 15;
const VerySmall = 12;
export default Text
