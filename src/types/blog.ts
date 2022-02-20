export default class Blog{
    title!:string;
    tags!:string[];
    description!:string;
    uid!:string;
    constructor(title: string, tags:string[], description: string, uid:string)
    {
        this.title= title;
        this.tags=tags;
        this.description=description;
        this.uid=uid;
    }
}