import React from 'react'
import { Container, Text, TouchableContainer } from '../../lib';
import R from '../../res';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import userState from '../../store/main';
import { StackNavigationProp } from '@react-navigation/stack';
import { useGoogleAuth } from '../../hooks/user';
import { addUser, getUserWithEmail } from '../../services/firebase/user';

interface Props {
    navigation: StackNavigationProp<any,any>
}

const Auth = (props: Props) => {

    const [pressentinDb, setpressentinDb] = React.useState(true)

    const user = useGoogleAuth()

    React.useEffect(()=>{
        GoogleSignin.configure({
            scopes:['email'],
            
            webClientId: '560688746043-am9er4ffs7oqeeffae33r1j8bf40u4f5.apps.googleusercontent.com',
        });

        if (!pressentinDb)
        {
            addUser({
                user:user,
                onSuccess:(res)=>{
                    console.log('==================firestore/User-ADD==================');
                    console.log("success: ", res.id);
                    user.id="Users/"+res.id;
                    userState.set(user);
                    props.navigation.navigate("MainRoute");
                    setpressentinDb(true)
                    console.log('====================================');
                },
                onEroor:(e)=>{
                    console.log('==================firestore/User-ADD==================');
                    console.log("errror: ",e);
                    console.log('====================================');
                }
            })
        }
    },[pressentinDb])
    return (
        <Container flex={1} backgoundColor={R.colors.background} center>
            <Container height={'100%'} width={'90%'} backgoundColor={R.colors.background} center >
                <TouchableContainer width={40}  Onpress={() =>{
                    console.log('====================================');
                    console.log("user ",user);
                    console.log('====================================');
                    getUserWithEmail({
                        email:user.email,
                        onSuccess:(res)=>{
                            console.log('==================firestore/User-GET==================');
                            console.log("success: ", res);
                            res[0]===undefined&&
                                setpressentinDb(false);

                                if (res[0]){
                                    console.log("id ",);

                                    userState.set({
                                        
                                        id:res[0].ref.path,
                                        name:res[0].data()["name"], 
                                        email:res[0].data()["email"]
                                    });
                                    props.navigation.navigate("MainRoute")

                                }
                                
                            console.log('====================================');
                        },
                        onEroor:(e)=>{
                            console.log('==================firestore/User-GET==================');
                            console.log("errror: ",e);
                            console.log('====================================');
                        }
                    })

                }}
                >
                    <R.svgs.goggle/>
                </TouchableContainer>
                
                <Text marginT={5}>
                    {R.strings.connect}
                </Text>
            </Container>
        </Container>
    )
}

export default Auth;


  