import React from 'react'
import { Container, Text, TouchableContainer } from '../../lib';
import R from '../../res';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import userState from '../../store/main';
import { User } from '../../types/user';
import { StackNavigationProp } from '@react-navigation/stack';
import firestore from '@react-native-firebase/firestore';

const usersCollection = firestore().collection('Users');

interface Props {
    navigation: StackNavigationProp<any,any>
}

  async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }
const Auth = (props: Props) => {
    React.useEffect(()=>{
        GoogleSignin.configure({
            scopes:['email'],
            
            webClientId: '560688746043-am9er4ffs7oqeeffae33r1j8bf40u4f5.apps.googleusercontent.com',
        });
    },[])
    return (
        <Container flex={1} backgoundColor={R.colors.background} center>
            <Container height={'100%'} width={'90%'} backgoundColor={R.colors.background} center >
                <TouchableContainer width={40}  Onpress={() =>{
                     onGoogleButtonPress().
                     then((k) =>{ 
                        console.log('Signed in with Google!',k.user);
                        let user =new User(k.user.displayName!==null?k.user.displayName:"def",k.user.email!==null?k.user.email:"defEmail")
                        userState.set(user)
                        console.log('====================================');
                        console.log("collection: ",usersCollection);
                        console.log('====================================');
                        usersCollection.add(user).
                        then(res=>{
                            console.log('===============Firebase/firestore=====================');
                            console.log("user added", res);
                            props.navigation.navigate("MainRoute")
                            console.log('====================================');
                        }).catch(
                            e=>{
                                console.log('=======================Firebase/firestore=============');
                                console.log("error: ",e);
                                console.log('====================================');
                            }
                        )
                        
                    }).
                     catch(e=>console.log("error ",e))
                    
                }}>
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


  