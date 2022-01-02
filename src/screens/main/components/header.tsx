import React from 'react'
import { Container, Text, TouchableContainer } from '../../../lib';
import R from '../../../res';

interface Props {
    name?:string|React.ReactNode;
    notif?: ()=>void;
    type:"notif"|"dots"|"download";
}

const types={
    notif: <R.svgs.Notif/>,
    dots: <R.svgs.Dots/>,
    download:<R.svgs.Download/>

}
const Header = (props: Props) => {
    return (
        <Container width={'100%'} row height={50} center> 
            {
                typeof props.name==="string"?
                <Text
                    color={R.colors.darkBlueText}
                    style={{fontSize:18}}
                   weight='400'  
               >
                   {props.name}
               </Text>
               :
               props.name
            }
            
            <Container
             flex={1} 
             alignItems='flex-end' 
            >
                <TouchableContainer 
                    rightComponent={types[props.type]}
                    width={"20%"}    
                />
            </Container>
        </Container>
    )
}

export default Header;
