import { User } from "../../types/user";
import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

const usersCollection = firestore().collection('Users');
const addUser =(p:
    {
        user:User,
        onSuccess:(res:FirebaseFirestoreTypes.DocumentReference<FirebaseFirestoreTypes.DocumentData>)=>void,
        onEroor:(e:any)=>void
    })=>{
    usersCollection.add(p.user).then(res=>{p.onSuccess(res)}).catch(e=>p.onEroor(e))
}

const getUserWithEmail =(p:
    {
        email:string,
        onSuccess:(res:FirebaseFirestoreTypes.QueryDocumentSnapshot<FirebaseFirestoreTypes.DocumentData>[])=>void,
        onEroor:(e:any)=>void
    })=>{
    usersCollection.where("email","==",p.email).get().then(res=>{p.onSuccess(res.docs)}).catch(e=>p.onEroor(e))
}

export {
    addUser,
    getUserWithEmail
}