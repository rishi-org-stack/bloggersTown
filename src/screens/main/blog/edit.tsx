import React from 'react'
import { ScrollView } from 'react-native'
import { Container, Input, Text, TouchableContainer } from '../../../lib'
import R from '../../../res'
import { Header } from '../components'

interface Props {
    
}
const d:string[]=[
   "ok"
]
const Edit = (props: Props) => {
    const [tag, settag] = React.useState("")
    const [tags, settags] = React.useState(["ok"])
    React.useEffect(()=>{},[tags])
    return (
        <Container flex={1} alignItems='center' backgoundColor={R.colors.background}>
            <Container height={'100%'} width={'90%'}>
                <Header
                    name={<Text weight='bold' large >{R.strings.newArticle}</Text>}
                    type='download'
                />
                <Input
                    placeholder='Title'
                    weight='bold'
                    fs={22}
                />
                <Container width={"100%"} height={3} backgoundColor={R.colors.grey} borderRadius={20}/>
               
                <Container >
                    <Input
                        placeholder='Add Tag'
                        OnChangeText={(text)=>settag(text)}
                        rightComponent={
                        <TouchableContainer Onpress={()=>{
                            
                            settags([...tags,tag])
                            }} height={'100%'} width={30} centerMain>
                            <R.svgs.Notif/>
                        </TouchableContainer>
                    }

                    />

                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {
                            tags.map((val,i)=>{
                                return (
                                    <Container
                                     height={45} 
                                     borderW={2} 
                                     borderRadius={20}
                                     borderR={0}
                                     center
                                     row
                                     marginR={20}
                                     borderC={R.colors.blue}
                                     >
                                         <Text marginL={20}>
                                            {val}
                                         </Text>
                                         <TouchableContainer
                                          centerMain 
                                          marginL={20} 
                                          height={45} 
                                          width={45} 
                                          Onpress={()=>{
                                              d.splice(i,1)
                                          }}
                                          borderRadius={45} 
                                          backgoundColor={R.colors.darkGrrey}>
                                                <R.svgs.Cross/>
                                         </TouchableContainer>
                                    </Container>
                                )
                            })
                        }
                    </ScrollView>
                </Container>
               
                <Text marginT={10} marginB={5} weight='bold' >
                    {R.strings.articleContent}
                </Text>
                <Container width={"100%"} height={3} marginB={10} backgoundColor={R.colors.grey} borderRadius={20}/>
               
               
                <Input
                    placeholder={R.strings.articleContent}
                    multiline
                    fs={15}
                    height={200}
                    
                />

                
            </Container>
        </Container>
    )
}

export default Edit
