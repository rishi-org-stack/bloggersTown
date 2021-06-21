import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import person from './model';
export default class database{
    private firestore:FirebaseFirestoreTypes.Module;
    private collection:string
    constructor(coll :string){
        this.firestore = firestore()
        this.collection=coll
    }
    async insertWithoutID(data:any):Promise<any>{
        const res = await this.firestore.collection(this.collection).add(data)
        return res
    }
    async insertWithID(data:any,id :string):Promise<any>{
        const res = await this.firestore.collection(this.collection).doc(id).set(data)
        return res
    }
    async getPersonWithID(id :string):Promise<any>{
        const res = await this.firestore.collection(this.collection).doc(id).get()
        return res
    }
    async getPersonWithEmailAndPassword(email :string,password:string):Promise<any>{
        const res = await this.firestore.collection(this.collection).where("email","==",email).where("password","==",password).get()
        return res
    }
}