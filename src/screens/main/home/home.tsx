import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { ScrollView } from 'react-native'
import { Container, Text } from '../../../lib'
import R from '../../../res'
import userState from '../../../store/main'
import { Blog, Category, Follow } from '../components'
import Header from '../components/header'

interface Props {
    navigation: StackNavigationProp<any,any>
}

const d=[1,2,3,4,5,6,7,8,9,10]
const Home = (props: Props) => {
    React.useEffect(()=>{
        let user = userState.get()
        console.log(user);
        
    },[])
    return (
        <Container
         alignItems='center' 
         flex={1}
         backgoundColor={R.colors.background}
         >
            <Container
             height={'100%'} 
             width={'90%'}
             backgoundColor={R.colors.background}
             >
                <Header
                    name={'Hi, '+userState.get().name+"!"}
                    type='notif'
                 />
                <ScrollView showsVerticalScrollIndicator={false} >
                    <Text weight='bold' large>
                        {R.strings.explore}
                    </Text>
                    <ScrollView
                     horizontal 
                     showsHorizontalScrollIndicator={false}
                     style={{marginTop:10, height:70}}
                    >
                        {
                            d.map((_,i)=>{
                                return(
                                    <Container marginR={15} key={i.toString()}>
                                        <Follow img={<R.svgs.P1/>}/>
                                    </Container>
                                    
                                )
                            })
                        }
                                            
                    </ScrollView>
                    
                    <ScrollView
                     horizontal 
                     showsHorizontalScrollIndicator={false}
                     style={{marginTop:15}}
                    >
                        {
                            d.map(()=>{
                                return(
                                    <Container marginR={15} style={{elevation:50}}>
                                        <Category />
                                    </Container>
                                    
                                )
                            })
                        }
                                            
                    </ScrollView>

                    <Text bold large>
                        {R.strings.blogs}
                    </Text>
                    {
                        d.map(()=>{
                            return(
                                <Container marginT={20}>
                                    <Blog topic='Big Data' question='Why Big Data Needs Thick Data?'/>
                                </Container>
                            )
                        })
                    }
                    
                 </ScrollView>
            </Container>
        </Container>
    )
}

export default Home
