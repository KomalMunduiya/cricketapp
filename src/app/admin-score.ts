export class AdminScore {
    formList: any=[];
    id:number;
    over:number;
    ball:number;
    run:number;
    total:number;
    team:string;
    player:string;
    status:string;
    storeData(form:any):[]{
        this.formList.push(form.value);
        console.log(this.formList);
        return this.formList;
    }
}
