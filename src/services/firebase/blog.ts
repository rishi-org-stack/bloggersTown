import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import Blog from '../../types/blog';

const blogsCollection = firestore().collection('Blogs');
const addBlog =(p:
    {
        blog:Blog,
        onSuccess:(res:FirebaseFirestoreTypes.DocumentReference<FirebaseFirestoreTypes.DocumentData>)=>void,
        onEroor:(e:any)=>void
    })=>{
    blogsCollection.add(p.blog).then(res=>{p.onSuccess(res)}).catch(e=>p.onEroor(e))
}

const getAllBlogWithUid =(p:
    {
        uid:string,
        onSuccess:(res:FirebaseFirestoreTypes.QueryDocumentSnapshot<FirebaseFirestoreTypes.DocumentData>[])=>void,
        onEroor:(e:any)=>void
    })=>{
    blogsCollection.where("uid","==",p.uid).get().then(res=>{p.onSuccess(res.docs)}).catch(e=>p.onEroor(e))
}

export {
    addBlog,
    getAllBlogWithUid
}