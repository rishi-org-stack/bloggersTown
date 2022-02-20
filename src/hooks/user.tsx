import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React from 'react'
import auth from '@react-native-firebase/auth';
import { User } from '../types/user';


async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }
const useGoogleAuth = ():User => {
    
    const[user,setUser]=React.useState<User>(new User("",""))
    React.useEffect(()=>{
        onGoogleButtonPress().then(
            res=>{
                let name = res.user.displayName==null?"defUser":res.user.displayName
                let email = res.user.email==null?"defUser":res.user.email
                setUser({id:"",name,email})
            }
        ).catch(e=>{
            console.log('====================================');
            console.log("google Auuth Error: ", e);
            console.log('====================================');
        })
    },[])
    console.log('====================================');
    console.log(user);
    console.log('====================================');
    return user
}

export  {useGoogleAuth}
