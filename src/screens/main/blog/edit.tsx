import React from 'react'
import { Dimensions, ScrollView } from 'react-native'
import { Container, Input, Text, TouchableContainer } from '../../../lib'
import R from '../../../res'
import { Header } from '../components'
import userState from '../../../store/main'
import { addBlog } from '../../../services/firebase/blog'



interface Props {
    
}

const Edit = (props: Props) => {
    const [tag, settag] = React.useState("")
    const [tags, settags] = React.useState<string[]>([])
    const [title, settitle] = React.useState("")
    const [content, setcontent] = React.useState("")
    React.useEffect(()=>{},[tags])
    return (
        <Container flex={1} alignItems='center' backgoundColor={R.colors.background}>
            <Container height={'100%'} width={'90%'}>
                <Header
                    name={
                        <Text weight='bold' large >
                            {R.strings.newArticle}
                        </Text>
                        }
                    type='download'
                />
                <Input
                    placeholder='Title'
                    weight='bold'
                    fs={22}
                    OnChangeText={text=>{
                        settitle(text)
                    }}
                />
                <Container width={"100%"} height={3} backgoundColor={R.colors.grey} borderRadius={20}/>
               
                <Container >
                    <Input
                        placeholder='Add Tag'
                        OnChangeText={(text)=>settag(text)}
                        rightComponent={
                        <TouchableContainer Onpress={()=>{
                            
                            settags([...tags,tag])
                            settag("")
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
                                              tags.splice(i,1)
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
                    OnChangeText={text=>{
                        setcontent(text)
                    }}
                />
                <TouchableContainer
                 backgoundColor={R.colors.blue}
                 width={50} 
                 height={50} 
                 centerMain 
                 borderRadius={50}
                 Onpress={()=>{
                    addBlog(
                        {
                            blog:{
                                title,
                                tags,
                                description:content,
                                uid:userState.get().id
                            },

                            onSuccess:(res)=>{
                                console.log('==================firestore/Blog-ADD==================');
                                console.log("success: ", res.id);
                                console.log('====================================');
                                settitle("")
                                settag("")
                                settags([])
                            },
                            onEroor:(e)=>{
                                console.log('==================firestore/Blog-ADD==================');
                                console.log("errror: ",e);
                                console.log('====================================');
                            
                            }
                        }
                    )
                 }}
                 
                 style={{elevation:50,position:'absolute',bottom:50, left:Dimensions.get('screen').width-100 }} >
                    <Text weight='bold' color={R.colors.background}>
                        ok
                    </Text>
                </TouchableContainer>
                
            </Container>
        </Container>
    )
}

export default Edit
