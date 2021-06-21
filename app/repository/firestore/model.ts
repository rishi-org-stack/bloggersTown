class person{
    public email:string;
    public password:string;
    public name:string;
    constructor(){
        this.email=""
        this.password=""
        this.name =""
    }
    public changeName(name:string){
        this.name =name
    }
    public changeEmail(name:string){
        this.email =name
    }
    public changePassword(name:string){
        this.password =name
    }

}

export default person;