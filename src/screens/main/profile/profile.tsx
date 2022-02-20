import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import React from 'react'
import { Dimensions, ScrollView } from 'react-native';
import { Container, Text, TouchableContainer } from '../../../lib';
import R from '../../../res';
import { getAllBlogWithUid } from '../../../services/firebase/blog';
import userState from '../../../store/main';
import { Blog, Header } from '../components';

interface Props {
    
}
const d=[1,2,3,4,5,6,7,8,9,10]

const Profile = (props: Props) => {
    const [postClicked, setpostClicked] = React.useState(false)
    const [followingClicked, setfollowingClicked] = React.useState(false)
    const [followersClicked, setfollowersClicked] = React.useState(false)
    const [myBlogs, setmyBlogs] = React.useState<FirebaseFirestoreTypes.QueryDocumentSnapshot<FirebaseFirestoreTypes.DocumentData>[]>([])
    React.useEffect(()=>{
        getAllBlogWithUid(
            {
                uid:userState.get().id,
                onSuccess:(res)=>{
                    console.log('==================firestore/Blog-GET==================');
                    console.log("success: ", res);
                    setmyBlogs(res)
                    console.log('====================================');
                },
                onEroor:(e)=>{
                    console.log('==================firestore/Blog-GET==================');
                    console.log("errror: ",e);
                    console.log('====================================');
                }
            }
        )
    },[])
    return (
        <Container flex={1} alignItems='center' backgoundColor={R.colors.background}>
            <Container height={'100%'} width={'90%'} alignItems='center' >
                <Header
                    name={<Text large weight='bold' >{R.strings.profile}</Text>}
                    type='dots'
                />
                {/* <ScrollView> */}
                <Container flex={1} width={"70%"} >
                {/* <ScrollView style={{width:"70%"}}> */}
                    <Container flex={1 } row >
                       <Container flex={1}  alignItems='flex-end' style={{justifyContent:'center'}}>
                            <R.svgs.P3 style={{marginRight:20, height:80}}/> 
                       </Container>
                       <Container flex={1} style={{justifyContent:'center'}}>
                            <Text color={R.colors.darkBlueText} medium>
                                @rishi
                            </Text>
                           
                            <Text weight='bold' large>
                               RishiJha
                            </Text>

                            <Text weight='bold' medium color={R.colors.blue} >
                                UI/UX Designer
                            </Text>
                       </Container>
                    </Container>
                    <Container flex={2}>
                        <Text weight='bold' large>
                            {R.strings.about}
                        </Text>

                        <Text color={R.colors.darkBlueText} medium >
                            Madison Blackstone is a director of user experience design, with experience managing global teams.
                        </Text>

                        <Container
                         width={'100%'} 
                         height={70} 
                         marginT={20}
                         borderRadius={10}
                         row 
                         backgoundColor={R.colors.blue}
                         style={{elevation:60, shadowColor:R.colors.darkBlueText, shadowOpacity:5}}
                        > 
                            <TouchableContainer
                             centerMain 
                             flex={1} 
                             borderRadius={10} 
                             backgoundColor={postClicked? R.colors.darkBlue:R.colors.blue} 
                             Onpress={()=>{
                                setpostClicked(true)
                                setfollowersClicked(false)
                                setfollowingClicked(false)
                            }}>
                                <Text weight='bold' large color={R.colors.background}>
                                    52
                                </Text>
                                <Text color={R.colors.background}>
                                    Posts
                                </Text>
                            </TouchableContainer>
                            <TouchableContainer
                                centerMain 
                                flex={1} 
                                borderRadius={10} 
                                backgoundColor={followingClicked? R.colors.darkBlue:R.colors.blue} 
                                Onpress={()=>{
                                setpostClicked(false)
                                setfollowersClicked(false)
                                setfollowingClicked(true)
                           }}>
                                <Text large color={R.colors.background}>
                                    455k
                                </Text>
                                <Text color={R.colors.background}>
                                    Following
                                </Text>
                            </TouchableContainer>
                            <TouchableContainer 
                                centerMain 
                                flex={1} 
                                borderRadius={10} 
                                backgoundColor={followersClicked? R.colors.darkBlue:R.colors.blue} 
                                Onpress={()=>{
                                setpostClicked(false)
                                setfollowersClicked(true)
                                setfollowingClicked(false)
                            }}>
                                <Text large color={R.colors.background}> 
                                    7.8K
                                </Text>
                                <Text color={R.colors.background}>
                                    Followers
                                </Text>
                            </TouchableContainer>
                        </Container>
                    </Container>
                </Container>
                <Container flex={1} width={Dimensions.get('screen').width} backgoundColor={R.colors.background} style={{elevation:50}}>
                    
                    <ScrollView
                     style={{width:"90%"}} 
                     showsVerticalScrollIndicator={false}>
                         <Text weight='bold' marginL={10} marginT={20} large>
                                {R.strings.myposts}
                            </Text>

                        {
                            myBlogs.map((_,i)=>{
                                return(
                                    <Container marginT={20}>
                                        <Blog topic={myBlogs[i].data()["tags"][0]} question={myBlogs[i].data()["title"]} img={<R.svgs.P4/>}/>
                                    </Container>
                                )
                            })
                        }
                    </ScrollView>
                </Container>
            {/* </ScrollView> */}
            </Container>
        </Container>
    )
}

export default Profile;
