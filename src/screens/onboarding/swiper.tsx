import React, { PropsWithChildren } from 'react'
import { Container, Text, TouchableContainer } from '../../lib';
import R from '../../res';
import Onboarding, { DotProps, NextButtonProps } from 'react-native-onboarding-swiper';
import { Dimensions, View } from 'react-native';

const Dot =(p:any)=>{
    return (
        // {p.}
    <Container height={8}  width={p.selected?22:8} borderRadius={8} marginR={5} backgoundColor={p.selected?R.colors.blue:R.colors.grey}/>
    )
}

const Next =(p:NextButtonProps)=>{
   return( <TouchableContainer
        height={50}
        width={60}
        marginB={10}
        marginR={20}
        borderRadius={10}
        backgoundColor={R.colors.blue}
        centerMain
        Onpress={()=>p.onPress()}
    >
        
        <R.svgs.Right/>
    </TouchableContainer>
   )
}

const Head =()=>{
    return(
        <Container
         width={"90%"} 
         height={Dimensions.get('screen').height/2} 
         backgoundColor='red'
         >

        </Container>
    )
}
const Swiper = () => {
    return (
                <Onboarding
                    pages={[
                        {
                            backgroundColor:R.colors.background,
                            title:"Read the article you \n want instantly",
                            subtitle:'You can read thousands of articles on Blog \n Club, save them in the application and share \n them with your loved ones.',
                            image:<Head/>
                        },
                        {
                            backgroundColor:R.colors.background,
                            title:"ok",
                            subtitle:'',
                            image:<Text>ok</Text>
                        },
                        {
                            backgroundColor:R.colors.background,
                            title:"ok",
                            subtitle:'',
                            image:<Text>ok</Text>
                        }
                    ]}
                    showSkip={false}
                    DotComponent={Dot}
                    NextButtonComponent={(p)=><Next {...p}/>}
                    bottomBarHeight={Dimensions.get('screen').height/4.5}
                    DoneButtonComponent={Next}
                    titleStyles={{
                        color:R.colors.darkBlue,
                        textAlign:'left',
                        // backgroundColor:'red'
                    }}
                    subTitleStyles={{
                        color:R.colors.darkBlueText,
                        textAlign:'left',
                        // backgroundColor:'red'
                    }}
                   
                    bottomBarColor={R.colors.background}
                />
    )
}

export default Swiper;
