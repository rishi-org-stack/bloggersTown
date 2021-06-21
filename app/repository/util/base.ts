class base {
    private createdOn:Date;
    private updatedOn:Date;
    private deletedOn:Date;
    constructor(){
        this.createdOn= new Date()
        this.updatedOn= new Date("0000-00-000")
        this.createdOn= new Date()
    }
    public create (){
        this.createdOn= new Date();
    }
    public update (){
        this.updatedOn= new Date();
    }
    public delete (){
        this.deletedOn= new Date();
    }
}

// const time = new Date()